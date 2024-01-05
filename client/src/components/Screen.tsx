export default function Screen(props: {
  desc: string;
  title: string;
  image: string;
  colorCode: string;
}) {
  return (
    <>
      {/* Screen */}
      <div data-aos="zoom-in-up" class="min-h-full overflow-hidden">
        <div class="container mx-auto my-20">
          <div class="max-w-screen-lg mx-auto">
            <div class="flex justify-center flex-col items-center ">
              <div
                class={`inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm ${props.colorCode}`}
              >
                SCREEN
              </div>
              <div class="md:text-6xl text-3xl font-black text-center mb-10  m-auto">
                {props.title}
              </div>
              <p
                class="text-lg md:w-4/6 w-5/6 text-center"
                innerHTML={props.desc}
              ></p>
            </div>
          </div>
        </div>
        <img
          src={props.image}
          class="m-auto w-full md:scale-100 scale-125"
          alt="koompi e13"
        />
      </div>
    </>
  );
}
