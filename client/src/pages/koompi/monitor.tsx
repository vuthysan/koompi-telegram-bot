import { JSX, createSignal } from "solid-js";

import Hero from "../../components/Hero";
import { useCart } from "../../contexts/cart";

function UseCase(props: {
  title: string;
  usecase: string;
  handleChangeUseCase: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent>;
}) {
  return (
    <div
      onClick={props.handleChangeUseCase}
      class={`${
        props.usecase === props.title
          ? "bg-secondary text-white font-semibold"
          : "bg-slate-100 font-normal"
      }  px-6 py-2 text-md rounded-[50px]  hover:font-medium cursor-pointer transition-all`}
    >
      {props.title}
    </div>
  );
}

export default function Monitor() {
  const [useCase, setUseCase] = createSignal("Company");

  const { addToCart }: any = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "monitor",
      title: "KOOMPI Monitor",
      image: "/images/monitor.png",
      price: 199,
    });
  };

  const handleChangeUseCase = (usecase: string) => {
    setUseCase(usecase);
  };

  const handleUseCaseImage = () => {
    if (useCase() === "Company")
      return (
        <img
          src="/images/ONELAB-2.png"
          alt="koompi mini"
          class="bg-[#f6f6f7]"
        />
      );
    if (useCase() === "Computer Labs")
      return (
        <img
          src="/images/computer-lab.png"
          alt="koompi mini"
          class="bg-[#f6f6f7]"
        />
      );
    if (useCase() === "Study Setup")
      return (
        <img
          src="/images/study-setup.png"
          alt="koompi mini"
          class="bg-[#f6f6f7]"
        />
      );
    if (useCase() === "Home Office")
      return (
        <img
          src="/images/home-office.png"
          alt="koompi mini"
          class="bg-[#f6f6f7]"
        />
      );
  };

  return (
    <>
      <Hero
        colorCode="bg-secondary"
        background="bg-[url(/images/background.jpg)]"
        title={`Monitor 24" More For Less`}
        price={199}
        img="/images/monitor6.png"
        desc="You can never have “too many” tabs with the KOOMPI Monitor. Simultaneously display more documents, media, and projects to get more done in less time."
      />

      {/* Performance */}
      <div data-aos="zoom-in-up" class="bg-white">
        <div>
          <div class="grid md:grid-cols-2 items-center justify-center">
            <img
              src="/images/Koompi Mini station.png"
              class="w-6/6 bg-[#f6f6f7] md:p-12 p-4"
              alt="koompi mini"
            />
            <div class="md:px-1 px-8 md:py-0 py-4 md:pb-0 pb-8 text-center">
              <div class="bg-secondary inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
                DISPLAY
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10">
                Clarity. Vibrancy. Efficiency.
              </div>
              <p class="text-lg md:w-4/6 w-6/6 m-auto">
                Enjoy an immersive experience every time you turn on the Monitor
                with the brilliant IPS full HD display. The rich detail lightens
                up your workload, allowing for increased productivity and focus
                - and extra time to kick back and relax with your favourite
                film.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div data-aos="zoom-in-up" class="bg-white">
        <div>
          <div class="grid md:grid-cols-2 items-center justify-center">
            <div class="md:px-1 px-8 md:py-0 py-4 md:pb-0 pb-8 text-center">
              <div class="bg-secondary inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
                PERFORMANCE
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10">
                Display performance
              </div>
              <p class="text-lg md:w-4/6 w-6/6 m-auto">
                Every day is a new journey with the KOOMPI Monitor. Allow
                yourself to be swept away in quality, professional experiences
                with each click. The Monitor’s large, vivid display enables
                greater productivity and entertainment.
              </p>

              <div class="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8">
                <div class="text-center">
                  <div>Display</div>
                  <p class="font-black md:text-3xl text-lg">24 inches</p>
                </div>
                <div class="text-center">
                  <div>Resolution</div>
                  <p class="font-black md:text-3xl text-lg">IPS 1080p</p>
                </div>
                <div class="text-center">
                  <div>Refresh rate</div>
                  <p class="font-black md:text-3xl text-lg">75Hz</p>
                </div>
                <div class="text-center">
                  <div>Ports</div>
                  <div class="font-black md:text-3xl text-lg">
                    <div>HDMI x1</div> <div>VGA x1</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/company.png"
              class="w-6/6 bg-[#f6f6f7] md:p-4 p-4 md:order-last order-first"
              alt="koompi mini"
            />
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div data-aos="zoom-in-up" class="bg-white">
        <div>
          <div class="grid md:grid-cols-2 items-center justify-center">
            <div class="order-first">{handleUseCaseImage()}</div>
            <div class="md:px-1 px-8 md:py-0 py-4 text-center ">
              <div class="bg-secondary inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
                Use Cases
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10">
                Personalised to You
              </div>
              <p class="text-lg md:w-4/6 w-6/6 m-auto">
                The MiniStation is the ideal solution for companies, startups,
                or SMEs looking for affordability inclusive of high performance
                and versatility.
              </p>

              <div class="grid md:grid-cols-4 grid-cols-2 gap-2 items-center justify-center mt-10 md:w-5/6  m-auto">
                <UseCase
                  title="Company"
                  usecase={useCase()}
                  handleChangeUseCase={() => handleChangeUseCase("Company")}
                />
                <UseCase
                  title="Computer Labs"
                  usecase={useCase()}
                  handleChangeUseCase={() =>
                    handleChangeUseCase("Computer Labs")
                  }
                />
                <UseCase
                  title="Study Setup"
                  usecase={useCase()}
                  handleChangeUseCase={() => handleChangeUseCase("Study Setup")}
                />
                <UseCase
                  title="Home Office"
                  usecase={useCase()}
                  handleChangeUseCase={() => handleChangeUseCase("Home Office")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-up">
        <div class="bg-white grid md:grid-cols-3 grid-cols-1 gap-4 ">
          <img
            src="/images/309614435_175943884970655_3602007539239903560_n.jpg"
            alt="koompi mini"
            class="w-full md:block hidden"
          />
          <div class="flex items-center justify-center flex-col md:p-0 py-8">
            <h2 class="font-bold text-xl text-slate-500">GET READY</h2>
            <h2 class=" font-extrabold text-4xl text-center">
              Order KOOMPI Monitor
            </h2>

            <button
              class="my-8 btn btn-disabled px-10 rounded-[50px] text-white text-sm font-semibold"
              onClick={() => handleAddToCart()}
            >
              Order Now
            </button>
          </div>
          <img
            src="/images/mini-work2.jpg"
            alt="koompi mini"
            class="w-full md:order-last order-first"
          />
        </div>
      </div>
    </>
  );
}
