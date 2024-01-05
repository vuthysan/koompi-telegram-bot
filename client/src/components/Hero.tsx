export default function Hero(props: {
  price: number;
  title: string;
  desc: string;
  img: string;
  background: string;
  colorCode: string;
}) {
  return (
    <>
      <div class={`${props.background} md:h-[90vh] h-[70vh]  overflow-hidden`}>
        <div class="bg-primary/60 backdrop-blur-md h-full bg-center bg-cover">
          <div
            data-aos="zoom-in"
            class="relative flex items-center flex-col w-full h-full backdrop-blur-md"
          >
            <div
              class={`mt-28 md:${props.colorCode} ${props.colorCode} md:text-base text-white px-6  text-xl font-bold rounded-[50px] flex gap-2 justify-center items-center`}
            >
              {/* <div class="text-sm">Price:</div> <div>${props.price}</div> */}
            </div>
            <h2
              class="md:text-6xl text-3xl font-extrabold mb-8  text-base-100 text-center glitch"
              data-glitch={props.title}
            >
              {props.title}
            </h2>
            <p class="md:w-3/6 md:text-2xl text-base text-slate-300 text-center z-10">
              {props.desc}
            </p>
            <img
              src={props.img}
              alt={props.title}
              class={`absolute bottom-0 z-0 ${
                props.price === 259 ? "md:w-4/12 w-10/12" : "md:w-5/12 w-12/12"
              } `}
            />
          </div>
        </div>
      </div>
    </>
  );
}
