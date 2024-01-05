import { A, useParams } from "@solidjs/router";

export default function Subnavbar(props: {
  title: string;
  overviewLink: string;
  techLink: string;
}) {
  return (
    <div class="bg-white/80 backdrop-blur-md z-10 fixed bottom-4 w-11/12 md:w-4/12  px-8 -translate-x-1/2 left-1/2 rounded-[50px] shadow-lg">
      <div class="container mx-auto ">
        <div class="flex justify-between py-4">
          <div class="font-bold md:text-base text-sm">{props.title}</div>
          <div class="flex gap-6">
            <A
              href={props.overviewLink}
              class="font-bold border-primary md:text-base text-sm"
              activeClass="border-b-2"
            >
              <div>Overview</div>
            </A>
            <A
              class="font-bold border-primary md:text-base text-sm"
              href={props.techLink}
              activeClass="border-b-2"
            >
              <div>Tech Specs</div>
            </A>
            {/* <div class="font-bold border-primary hidden md:block">
              <div>Review</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
