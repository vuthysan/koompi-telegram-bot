import { JSX } from "solid-js";

export default function Payment(props: {
  image: string;
  title: string;
  data: JSX.Element;
}) {
  return (
    <div class="bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer px-2 py-1 rounded-md mb-2">
      <div class="flex gap-4 items-center">
        <img src={props.image} class="w-[48px]" alt={props.title} />
        <div>
          <h4 class="text-md font-bold">{props.title}</h4>
          {props.data}
        </div>
      </div>
    </div>
  );
}
