import { For, createSignal } from "solid-js";

import { A } from "@solidjs/router";
import { useCart } from "../contexts/cart";

export default function Navbar() {
  const { quantity }: any = useCart();

  const [drawer, setDrawer] = createSignal(false);

  const menus = [
    {
      title: "KOOMPI",
      link: "/koompi",
      target: "",
    },
    {
      title: "OS",
      link: "/koompi/os",
      target: "",
    },
    {
      title: "PROJECTS",
      link: "/projects",
      target: "",
    },
    {
      title: "ABOUT",
      link: "/about",
      target: "",
    },
  ];

  return (
    <>
      <div class="relative bg-secondary p-2 z-10">
        <div class="flex gap-3 items-center justify-center">
          <img src="/images/flame.png" class="h-6" alt="" />
          <div class="text-white font-medium text-sm">
            <A
              href="https://weteka.org/blog/introducing-koompi-os-3-beta-a-next-generation-of-koompi-operating-system-cgu0gZB5j"
              target="_blank"
              class="underline underline-offset-4"
            >
              KOOMPI OS3 Beta is available now!
            </A>
          </div>
        </div>
      </div>
      <div class="hidden md:block sticky top-0 z-10 backdrop-blur-md bg-primary">
        <div class="container m-auto navbar">
          <div class="navbar-start">
            <A href="/">
              <img src="/images/Koompi-white.png" class="h-[50px]" alt="" />
            </A>
          </div>

          <div class="navbar-end">
            <div class="flex items-center gap-5 text-white ">
              <For each={menus}>
                {(m) => {
                  return (
                    <A
                      href={m.link}
                      activeClass="text-secondary"
                      target={m.target}
                    >
                      <div class="font-bold ">{m.title}</div>
                    </A>
                  );
                }}
              </For>
              {/* <A
                href="/cart"
                activeClass="font-bold text-secondary"
                class="relative"
              >
                <i class="ri-shopping-cart-2-line text-xl"></i>{" "}
                <div class="absolute -top-1 text-white -right-2 bg-error rounded-[50%] w-4 h-4 flex justify-center items-center text-xs">
                  {quantity()}
                </div>
              </A> */}
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden top-0 z-10 backdrop-blur-md bg-primary relative p-2">
        <label
          for="my-drawer"
          class="btn btn-primary drawer-button absolute top-1"
        >
          <i class="ri-menu-2-line md:hidden text-white text-2xl "></i>
        </label>
        <div class="flex justify-center items-center">
          <A href="/">
            <img src="/images/Koompi-white.png" class="h-[40px]" alt="" />
          </A>
        </div>
      </div>

      <div class="drawer z-50">
        <input
          id="my-drawer"
          type="checkbox"
          checked={drawer()}
          class="drawer-toggle"
          onClick={() => setDrawer(!drawer())}
        />

        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <For each={menus}>
              {(m) => {
                return (
                  <li>
                    <A
                      href={m.link}
                      activeClass="text-secondary"
                      target={m.target}
                      onClick={() => setDrawer(!drawer())}
                    >
                      <div class="font-bold ">{m.title}</div>
                    </A>
                  </li>
                );
              }}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
