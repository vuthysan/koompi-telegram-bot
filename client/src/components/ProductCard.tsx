import { A } from "@solidjs/router";

export default function ProductCard(props: {
  img: string;
  title: string;
  desc: string;
  inch: string;
  link: string;
  cols: number;
}) {
  return (
    <div class="bg-white md:rounded-2xl rounded-0 mb-4 p-4 shadow-sm text-center">
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
