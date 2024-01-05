import { JSX } from "solid-js";

export default function Battery(props: {
  desc: string;
  title: string;
  colorCode: string;
  data: JSX.Element;
}) {
  return (
    <>
      <div class="min-h-full ">
        <div data-aos="zoom-in-up" class="container mx-auto mt-20 mb-12">
          <div class="flex justify-center flex-col items-center ">
            <div
              class={`${[
                props.colorCode,
              ]} inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm`}
            >
              BATTERY
            </div>
            <div class="md:text-6xl text-3xl font-black text-center mb-10  m-auto">
              {props.title}
            </div>

            <p class="text-lg w-5/6 mx-auto text-center mb-8">{props.desc}</p>

            <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
              <div class="text-center">
                <div>LI-POLYMER BATTERY</div>
                <p class="font-black text-3xl">5000mAH</p>
              </div>
              <div class="text-center">
                <div>WEB BROWSING</div>
                <p class="font-black text-3xl">8 hours</p>
              </div>
              <div class="text-center">
                <div>VIDEO PLAYBACK</div>
                <p class="font-black text-3xl">10 hrs</p>
              </div>
              <div class="text-center">
                <div>REGULAR WORK</div>
                <p class="font-black text-3xl">6-8 hrs</p>
              </div>
            </div>
          </div>
          {props.data}
        </div>
      </div>
    </>
  );
}
