import { A } from "@solidjs/router";
import Battery from "../../../components/Battery";
import Hero from "../../../components/Hero";
import Performance from "../../../components/Performance";
import Screen from "../../../components/Screen";
import Subnavbar from "../../../components/Subnavbar";
import { createSignal } from "solid-js";
import { useCart } from "../../../contexts/cart";

export default function E13() {
  const { addToCart }: any = useCart();
  const [state, setState] = createSignal("rose-gold");

  const handleAddToCart = () => {
    addToCart({
      id: "e13",
      title: "KOOMPI E13",
      image: "/images/gray-e13.png",
      price: 369.0,
    });
  };

  const handleSetState = (props: string) => {
    setState(props);
  };

  return (
    <>
      <Hero
        colorCode="bg-error"
        background="bg-[url(/images/background.jpg)]"
        title="KOOMPI E13"
        price={369}
        img="/images/e13.png"
        desc="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
      />

      {/* Screen */}
      <Screen
        title="Clear IPS Anti-Glare Visuals In Full HD Display"
        image="/images/bge13.png"
        colorCode="bg-error"
        desc={`The <b>13.3"</b> IPS display features Clear IPS Anti-Glare
        visuals in full HD with a widescreen <b>16:9</b> aspect ratio,
        <b>1920 x 1080</b> resolution, and a <b> 73.44%</b> body ratio
        for immersive viewing.`}
      />

      {/* Shapeliness */}
      <div class="bg-gray-200/80 md:p-0 p-2">
        <div class="container mx-auto">
          <div class="max-w-screen-lg mx-auto py-24">
            <div class="text-center">
              <div class="bg-error inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
                SHAPELINESS
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10 ">
                Slim Design In Durable Compact Hardware
              </div>
              <p class="text-lg md:w-5/6 w-6/6 mx-auto">
                Experience a sleek and slim design with durable, compact
                hardware that is both thin and light. This <b>13.3"</b> laptop
                weighs only <b>1.3 kgs</b> and measures a mere <b>13.5mm</b> in
                thickness, making it the perfect choice for on-the-go
                professionals.
              </p>
            </div>

            <div>
              {state() === "rose-gold" ? (
                <img
                  src="/images/koompi-rose-gold.png"
                  class="w-3/4 mx-auto mt-20"
                  alt="koompi e13 rose-gold"
                />
              ) : (
                <img
                  src="/images/koompi-gray.png"
                  class="w-3/4 mx-auto mt-20"
                  alt="koompi e13 rose-gold"
                />
              )}
            </div>
            <div class="flex gap-8 justify-center mt-8 ">
              <div
                class={`text-center cursor-pointer hover:font-bold transition-all ${
                  state() === "rose-gold" && "font-bold"
                }`}
                onClick={() => handleSetState("rose-gold")}
              >
                <div class="bg-[#fcc] h-8 w-8 m-auto rounded-[50%] " />
                <p>Rose Gold</p>
              </div>
              <div
                class="text-center cursor-pointer hover:font-bold transition-all"
                onClick={() => handleSetState("gray")}
              >
                <div class="bg-[#7d7982] h-8 w-8 m-auto rounded-[50%]" />
                <p>Space Gray</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance */}
      <Performance
        image="/images/SAM08701.jpg"
        colorCode="bg-error"
        title="Strong Core Processor For Your Tasks"
        desc={`The Intel Celeron N4100 processor provides strong performance
                for your tasks. With a boost up to <b>2.4GHz</b>, coupled with 
                <b>8GB DDR4</b>
                RAM and an <b>M.2 SATA3 SSD</b> (128GB or 256GB), you get
                lightning-fast read/write speeds of <b>6 Gb/s</b>. The I/O ports
                include Type <b>C x1 and A x2</b>, while the extendable display
                supports <b>Type C and Micro HDMI</b>.`}
      />

      {/* BATTERY */}
      <Battery
        colorCode="bg-error"
        title="2 HOURS TO FULLY CHARGED"
        desc="Li-polymer batteries take around 2 hours to fully charge.
              Depending on the usage scenario, a fully charged battery can last
              up to 8 hours of web browsing, 10 hours of video playback, and 6-8
              hours of regular work."
        data={
          <img
            src="/images/e13-battery.png"
            alt="koompi e13"
            class="w-5/6 mx-auto my-12"
          />
        }
      />

      <div>
        <div class="bg-white  grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div class="flex items-center justify-center flex-col md:p-0 py-8">
            <h2 class="font-bold text-xl text-slate-500">GET READY</h2>
            <h2 class=" font-extrabold text-4xl text-center">
              Order KOOMPI E13
            </h2>

            <button
              class="my-8 btn btn-disabled px-10 rounded-[50px] text-white text-sm font-semibold"
              onClick={() => handleAddToCart()}
            >
              Order Now
            </button>
          </div>
          <img
            src="/images/159703698_928542257919703_4406632332740507335_n.jpg"
            alt=""
            class="w-full"
          />
        </div>
      </div>
    </>
  );
}
