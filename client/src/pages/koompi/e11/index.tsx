import Battery from "../../../components/Battery";
import Hero from "../../../components/Hero";
import Performance from "../../../components/Performance";
import Screen from "../../../components/Screen";
import Subnavbar from "../../../components/Subnavbar";
import { useCart } from "../../../contexts/cart";

export default function E11() {
  const { addToCart }: any = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "e11",
      title: "KOOMPI E11",
      image: "/images/e11.png",
      price: 179.0,
    });
  };

  return (
    <div class="overflow-hidden">
      <Subnavbar
        title="KOOMPI E11"
        overviewLink="/koompi/e11"
        techLink="/koompi/e11/specs"
      />

      <Hero
        background="bg-[url(/images/background.png)]"
        title="KOOMPI E11"
        price={179}
        img="/images/E11-second.png"
        desc="Built for students, the KOOMPI E11 is your starting point for
        computing. As compact as the E13, but lighter. No compromise on
        open-source performance. Perfect for students on the go."
        colorCode="bg-secondary"
      />

      {/* Screen */}
      <Screen
        title="Clear IPS Anti-Glare Visuals In Full HD Display"
        desc={`The <b>11.6"</b> IPS display features Clear IPS Anti-Glare
                visuals in full HD with a widescreen <b>16:9</b> aspect ratio,
                <b>1920 x 1080</b> resolution, and a <b> 73.44%</b> body ratio
                for immersive viewing.`}
        image="/images/bag-e11.jpg"
        colorCode="bg-secondary"
      />

      {/* Shapeliness */}
      <div
        data-aos="zoom-in-up"
        class="bg-gray-200/80 md:p-0 p-2 md:text-left text-center"
      >
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row justify-center items-center gap-4 py-24">
            <div class="w-full ">
              <div class="bg-secondary inline-block rounded-[50px] px-2 py-1 text-white">
                SHAPELINESS
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10  ">
                Small, Slim and Light
              </div>
              <p class="text-lg">
                Experience the ultimate Shapeliness with a sleek and compact
                design. This device boasts a slim profile measuring only{" "}
                <b>16.9mm</b>
                thick, with a length of <b>277mm</b>, width of <b>190.3mm</b>,
                and weighs a mere <b>0.93KG</b>, making it small, slim, and
                light for easy portability and effortless usage.
              </p>
            </div>

            <img
              src="/images/E11-slim-crop.png"
              class="md:w-1/2 w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Performance */}
      <Performance
        image="/images/5fad16823e4901549fe247f0_IMG_2705.jpg"
        colorCode="bg-secondary"
        title="Strong Core Processor For Your Tasks"
        desc={` Experience the ultimate Shapeliness with a sleek and compact
        design. This device boasts a slim profile measuring only
        <b>16.9mm</b>
        thick, with a length of <b>277mm</b>, width of <b>190.3mm</b>,
        and weighs a mere <b>0.93KG</b>, making it small, slim, and
        light for easy portability and effortless usage.`}
      />

      {/* BATTERY */}
      {/* BATTERY */}
      <Battery
        colorCode="bg-secondary"
        title="2 HOURS TO FULLY CHARGED"
        desc="Li-polymer batteries take around 2 hours to fully charge.
              Depending on the usage scenario, a fully charged battery can last
              up to 8 hours of web browsing, 10 hours of video playback, and 6-8
              hours of regular work."
        data={
          <video
            class="mt-20 md:rounded-2xl rounded-none"
            src="/images/battery.mp4"
            autoplay
            loop
          ></video>
        }
      />

      <div data-aos="zoom-in-up">
        <div class="bg-white grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div class="flex items-center justify-center flex-col md:p-0 py-8">
            <h2 class="font-bold text-xl text-slate-500">GET READY</h2>
            <h2 class=" font-extrabold text-4xl text-center">
              Order KOOMPI E11
            </h2>

            <button
              disabled
              class="btn-disabled my-8 btn  px-10 rounded-[50px] text-sm font-semibold"
              onClick={() => handleAddToCart()}
            >
              Order Now
            </button>
          </div>
          <img
            src="https://i.ytimg.com/vi/TP91Gc6koFM/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
