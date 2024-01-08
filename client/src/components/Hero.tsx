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
      <div class={`${props.background}   overflow-hidden`}>
        <div class="bg-primary/60 backdrop-blur-md  bg-center bg-cover">
          <div class="relative flex items-center flex-col w-full h-full backdrop-blur-md p-3">
            <h2 class="md:text-6xl text-3xl mb-8  text-base-100 text-center font-black pt-10">
              {props.title}
            </h2>
            <p class="md:w-3/6 text-sm text-slate-300 text-center z-10">
              {props.desc}
            </p>
            <img src={props.img} alt={props.title} class={"pt-10 z-0 w-full"} />
          </div>
        </div>
      </div>
    </>
  );
}
