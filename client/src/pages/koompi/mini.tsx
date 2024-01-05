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
          ? "bg-error text-white font-semibold"
          : "bg-slate-100 font-normal"
      }  px-6 py-2 text-md rounded-[50px]  hover:font-medium cursor-pointer transition-all`}
    >
      {props.title}
    </div>
  );
}

export default function Mini() {
  const [useCase, setUseCase] = createSignal("Company");

  const { addToCart }: any = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "mini",
      title: "KOOMPI Mini",
      image: "/images/mini.png",
      price: 259.0,
    });
  };

  const handleChangeUseCase = (usecase: string) => {
    setUseCase(usecase);
  };

  const handleUseCaseImage = () => {
    if (useCase() === "Company")
      return (
        <img
          src="/images/home-office.png"
          alt="koompi mini"
          class="bg-[#f6f6f7] p-4"
        />
      );
    if (useCase() === "Computer Labs")
      return (
        <img
          src="/images/computer-lab.png"
          alt="koompi mini"
          class="bg-[#f6f6f7] p-4"
        />
      );
    if (useCase() === "Study Setup")
      return (
        <img
          src="/images/study-setup.png"
          alt="koompi mini"
          class="bg-[#f6f6f7] p-4"
        />
      );
    if (useCase() === "Home Office")
      return (
        <img
          src="/images/company.png"
          alt="koompi mini"
          class="bg-[#f6f6f7] p-4"
        />
      );
  };

  return (
    <>
      <Hero
        colorCode="bg-error"
        background="bg-[url(/images/background.jpg)]"
        title="Professional Powerhouse"
        price={259}
        img="/images/Koompi Mini station.png"
        desc="An all-inclusive, professional powerhouse ready to be incorporated
        seamlessly into your workplace, classroom, or within the comfort
        of your own home. Meet the KOOMPI MiniStation."
      />

      {/* Shapeliness */}
      <div data-aos="zoom-in-up" class="bg-gray-200/80 md:p-0 p-2">
        <div class="container mx-auto">
          <div class="max-w-screen-lg mx-auto py-24">
            <div class="text-center">
              <div class="md:text-6xl text-3xl font-black mb-10 ">
                More ports, more connectivity
              </div>
              <p class="text-lg md:w-5/6 w-6/6 mx-auto">
                With Ethernet network, Headphone jack, 2 HDMI ports , and 2 USB
                3.0 ports, 2 USB 2.0 ports, the KOOMPI Mini allows for more
                connectivity than ever. Multiple screen sharing or external
                inputs does not get any easier than this
              </p>
            </div>

            <div>
              <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                  <img
                    src="/images/mini-specs.png"
                    class="w-3/4 mx-auto mt-20"
                    alt="koompi e13 rose-gold"
                  />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                  <img
                    src="/images/mini-specs2.png"
                    class="w-3/4 mx-auto mt-20"
                    alt="koompi e13 rose-gold"
                  />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                  <img
                    src="/images/mini-specs3.png"
                    class="w-3/4 mx-auto mt-20"
                    alt="koompi e13 rose-gold"
                  />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" class="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div data-aos="zoom-in-up" class="bg-white">
        <div>
          <div class="grid md:grid-cols-2 items-center justify-center">
            <img src="/images/mini4.jpg" alt="koompi mini" />
            <div class="md:px-1 px-8 md:py-0 py-4 md:pb-0 pb-8 text-center">
              <div class="bg-error inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
                PERFORMANCE
              </div>
              <div class="md:text-6xl text-3xl font-black mb-10">
                Compact and capable
              </div>
              <p class="text-lg md:w-4/6 w-6/6 m-auto">
                Don't let the size fool you. The KOOMPI Mini makes no
                compromises with performance, as its sleek hardware comes with
                endless possibilities to create.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div data-aos="zoom-in-up" class="bg-white">
        <div>
          <div class=" grid md:grid-cols-2 items-center justify-center">
            <div class="md:order-first order-last md:px-1 px-8 md:py-0 py-4 text-center ">
              <div class="bg-error inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
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
            <div>{handleUseCaseImage()}</div>
          </div>
        </div>
      </div>

      {/* BATTERY */}
      <div data-aos="zoom-in-up" class="min-h-full ">
        <div class="container mx-auto mt-20 mb-12">
          <div class="flex justify-center flex-col items-center ">
            <div class="bg-error inline-block rounded-[50px] px-2 py-1 text-white md:text-base text-sm">
              KOOMPI OS
            </div>
            <div class="md:text-6xl text-3xl font-black text-center mb-10 md:w-5/6 w-6/6  m-auto">
              Maximize productivity with KOOMPI OS
            </div>

            <p class="text-lg md:w-4/6 w-6/6 md:px-0 px-2 mx-auto text-center mb-8">
              The MiniStation runs on KOOMPI OS, a multi-purpose OS used for
              both desktop and enterprise servers. Our R&D team takes pride in
              their continued dedication to advancing features focused on areas
              such as Blockchain, P2P, and AI.
            </p>
          </div>
          <img
            src="/images/company.png"
            alt="koompi mini"
            class="md:w-4/6 w-6/6 mx-auto md:my-12 my-4"
          />
        </div>
      </div>

      <div data-aos="zoom-in-up">
        <div class="bg-white  grid md:grid-cols-3 grid-cols-1 gap-4 ">
          <img
            src="/images/309614435_175943884970655_3602007539239903560_n.jpg"
            alt="koompi mini"
            class="w-full"
          />
          <div class="flex items-center justify-center flex-col md:p-0 py-8">
            <h2 class="font-bold text-xl text-slate-500">GET READY</h2>
            <h2 class=" font-extrabold text-4xl text-center">
              Order KOOMPI Mini
            </h2>

            <button
              class="my-8 btn btn-disabled px-10 rounded-[50px] text-white text-sm font-semibold"
              onClick={() => handleAddToCart()}
            >
              Order Now
            </button>
          </div>
          <img src="/images/mini-work2.jpg" alt="koompi mini" class="w-full" />
        </div>
      </div>
    </>
  );
}
