export default function Performance(props: {
  desc: string;
  title: string;
  image: string;
  colorCode: string;
}) {
  return (
    <>
      {/* Performance */}
      <div class="bg-white">
        <div>
          <div
            data-aos="zoom-in-up"
            class="flex md:flex-row flex-col justify-center items-center gap-4"
          >
            <div class="w-screen">
              <img src={props.image} alt="" class="lg:max-w-4xl w-full" />
            </div>
            <div class="md:px-18 px-8 md:pb-0 pb-8 md:text-left text-center">
              <div
                class={`inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm ${props.colorCode}`}
              >
                PERFORMANCE
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10">
                {props.title}
              </div>
              <p class="text-lg" innerHTML={props.desc}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
