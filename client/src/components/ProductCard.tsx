import { A } from "@solidjs/router";

export default function ProductCard(props: {
  img: string;
  title: string;
  desc: string;
  inch: string;
  link: string;
  cols: number;
}) {
  if (props.cols === 1) {
    return (
      <div
        data-aos="zoom-in-up"
        class="bg-white flex md:flex-row flex-col justify-between items-center mb-4 shadow-sm md:rounded-2xl rounded-0 p-4"
      >
        <div class="md:max-w-2xl  w-[100%]">
          <img
            src={`/images/${props.img}`}
            alt={props.title}
            class="w-full m-auto"
          />
        </div>
        <div class="md:max-w-full md:text-left text-center">
          <div>{props.inch}</div>
          <h2 class="text-primary font-extrabold my-3 md:text-4xl text-2xl">
            {props.title}
          </h2>
          <p>{props.desc}</p>
          <A href={props.link}>
            <button class="my-8 bg-secondary py-3 px-6 rounded-[50px] text-white text-sm font-semibold">
              Learn More
            </button>
          </A>
        </div>
      </div>
    );
  }
  if (props.cols === 2) {
    return (
      <div
        data-aos="zoom-in-up"
        class="bg-white md:rounded-2xl rounded-0 p-4 shadow-sm text-center"
      >
        <div>
          <img
            src={`/images/${props.img}`}
            alt={props.title}
            class="w-[80%] m-auto"
          />
        </div>
        <div>
          <div class="mt-6">{props.inch}</div>
          <h2 class="text-primary font-extrabold my-3 md:text-4xl text-2xl">
            {props.title}
          </h2>
          <p>{props.desc}</p>
          <A href={props.link}>
            <button class="my-8 bg-secondary py-3 px-6 rounded-[50px] text-white text-sm font-semibold">
              Learn More
            </button>
          </A>
        </div>
      </div>
    );
  }
}
