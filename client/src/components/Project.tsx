import { A } from "@solidjs/router";
import { JSX } from "solid-js";

export default function MyProject(props: {
  title: string;
  desc: string;
  link: string;
  data: JSX.Element;
  target: string;
}) {
  return (
    <div class="relative md:h-[100vh] w-[100%] ">
      {props.data}
      <div class="md:absolute md:py-0 py-8 md:bg-primary/80 bg-primary flex justify-center gap-8 items-center flex-col backdrop-blur-[8px] top-0 left-0 w-full h-full">
        <h3 class="col-span-2 font-black lg:text-9xl text-3xl text-white ">
          {props.title}
        </h3>
        <p class="lg:text-2xl text-lg lg:w-[40vw] w-full text-center text-white">
          {props.desc}
        </p>
        <A href={props.link} target={props.target}>
          <div class="bg-error text-white px-6 py-3 rounded-full font-bold">
            Learn More
          </div>
        </A>
      </div>
    </div>
  );
}
