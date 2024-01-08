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
      <div class="z-10 bg-primary">
        <div class="flex justify-between navbar p-3">
          <div class="">
            <A href="/">
              <img src="/images/Koompi-white.png" class="h-[40px]" alt="" />
            </A>
          </div>

          <div class="navbar-end">
            <div class="flex items-center gap-5 text-white ">
              <A
                href="/cart"
                activeClass="font-bold text-secondary"
                class="relative"
              >
                <i class="ri-shopping-basket-line text-2xl"></i>

                <div class="absolute -top-1 text-white -right-2 bg-error rounded-[50%] w-4 h-4 flex justify-center items-center text-xs">
                  {quantity()}
                </div>
              </A>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="md:hidden top-0 z-10 backdrop-blur-md bg-primary relative p-2">
        <div class="flex justify-center items-center">
          <A href="/">
            <img src="/images/Koompi-white.png" class="h-[40px]" alt="" />
          </A>
        </div>
      </div> */}
    </>
  );
}
