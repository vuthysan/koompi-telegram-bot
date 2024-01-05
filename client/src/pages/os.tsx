import "solid-slider/slider.css";
import "aos/dist/aos.css";

import {
  Match,
  Switch,
  createEffect,
  createSignal,
  on,
  onCleanup,
} from "solid-js";

import { A } from "@solidjs/router";
import AOS from "aos";
import SEO from "../components/SEO";

function useDebounce(signal: any, delay: number) {
  const [debouncedSignal, setDebouncedSignal] = createSignal(signal());
  let timerHandle: number;
  createEffect(
    on(signal, (s) => {
      timerHandle = setTimeout(() => {
        setDebouncedSignal(s);
      }, delay);
      onCleanup(() => clearTimeout(timerHandle));
    })
  );
  return debouncedSignal;
}

function Card(props: any) {
  return (
    <div class="flex flex-col md:flex-row gap-10 w-[100%] md:w-[80%] justify-center items-center text-white">
      <img
        src={`/images/os/${props.img}`}
        alt="koompi os"
        class="rounded-lg w-[100%] md:w-[50%]"
        data-aos="fade-right"
        data-aos-duration="800"
      />
      <div
        class="text-center md:text-left px-3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 class="text-4xl md:text-7xl font-black mb-8">{props.title}</h2>
        <p class="font-medium opacity-80 text-lg">{props.desc}</p>

        <A href="https://dev.koompi.org/os3/minimal/">
          <button class="btn btn-secondary rounded-full px-10 md:my-10 my-3 text-white">
            Download
          </button>
        </A>
      </div>
    </div>
  );
}

export default function OS() {
  const [step, setStep] = createSignal(0, { equals: false });
  const [initialY, setInitialY] = createSignal(0);

  const debouncedStep = useDebounce(step, 50);

  const handleScroll = (e: WheelEvent) => {
    if (e.deltaY > 0 && debouncedStep() === 5) {
      setStep(0);
      return;
    }
    if (e.deltaY > 0 && debouncedStep() < 5) {
      setStep(debouncedStep() + 1);
      return;
    }
    if (e.deltaY < 0 && debouncedStep() > 0) {
      setStep(debouncedStep() - 1);
    }
  };

  function moveTouch(e: TouchEvent) {
    e.preventDefault();

    if (initialY === null) {
      return;
    }

    var currentY = e.touches[0].clientY;

    var diffY = initialY() - currentY;

    // sliding vertically
    if (diffY > 0 && debouncedStep() === 5) {
      // swiped up
      console.log("swiped up");
      setStep(0);
      return;
    }
    if (diffY > 0 && debouncedStep() < 5) {
      setStep(debouncedStep() + 1);
      return;
    }
    if (diffY < 0 && debouncedStep() > 0) {
      setStep(debouncedStep() - 1);
    }

    setInitialY(0);
  }

  createEffect(() => {
    AOS.init();
  });

  function startTouch(e: TouchEvent) {
    setInitialY(e.touches[0].clientY);
  }

  return (
    <div
      class="relative"
      onWheel={(e) => {
        console.clear();
        handleScroll(e);
      }}
      onTouchStart={startTouch}
      onTouchMove={moveTouch}
      // onScroll={handleScrollEvent}
    >
      <SEO title="KOOMPI OS" image="/images/seo/home.png" />
      <div class="absolute top-0 left-0 z-50 w-full">
        <A href="/">
          <img
            src="/images/os/panel.png"
            alt="koompi os"
            class="w-full absolute top-0 left-0"
            data-aos="fade-down"
          />
        </A>
      </div>
      <div class="relative h-full w-full overflow-hidden">
        <img
          src="/images/os/bg.png"
          alt="koompi os"
          class="h-[100vh] w-full object-cover"
        />
        <img
          src="/images/os/dock.png"
          alt="koompi os"
          class="bottom-0 left-[50%] absolute -translate-x-[50%] rounded-3xl z-10"
        />
      </div>

      <div class="w-full h-full flex flex-col justify-center align-middle place-items-center absolute top-0 left-0 overflow-hidden z-10">
        <Switch>
          <Match when={debouncedStep() === 0}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="text-center text-white w-4/4 md:w-2/4"
            >
              <span class="text-sm px-3 py-1 bg-error font-semibold rounded-md">
                BETA
              </span>
              <h2 class="text-4xl md:text-7xl font-black mb-8">KOOMPI OS3 </h2>
              <p class="font-medium opacity-80 text-lg md:text-2xl px-3">
                A versatile operating system that prioritizes user control and
                flexibility. It offers both an immutable and mutable OS,
                allowing users to switch seamlessly between modes based on your
                requirements.
              </p>

              <A href="https://dev.koompi.org/os3/minimal/">
                <button class="btn btn-secondary rounded-full px-10 my-12 text-white">
                  Download
                </button>
              </A>
            </div>
          </Match>
          <Match when={debouncedStep() === 1}>
            <Card
              img="smartupdate-dark.png"
              title={"Smart Updates"}
              desc={`
              Gone are the days of disruptive updates interrupting your workflow. KOOMPI OS3 introduces smart updates, ensuring that your system remains up-to-date without causing any disruptions.`}
            />
          </Match>
          <Match when={debouncedStep() === 2}>
            <Card
              img="subsystems.png"
              title={"Multiple Linux Distributions"}
              desc={`
              Embrace the power of choice with KOOMPI OS3's support for multiple Linux distributions. Whether you're a developer, a designer, or a casual user, you can select the Linux distribution that best suits your needs and preferences.`}
            />
          </Match>
          <Match when={debouncedStep() === 3}>
            <Card
              img="appstore.png"
              title={"App Store"}
              desc={`
Easily download a world of powerful applications through the dedicated KOOMPI App Store. Curated with care, this marketplace offers a diverse range of software optimized for KOOMPI OS3. `}
            />
          </Match>
          <Match when={debouncedStep() === 4}>
            <Card
              img="interface-dark.png"
              title={"Minimal User Interface"}
              desc={`
              A simple and easy-to-use user interface (UI) designed with the goal of providing a seamless and intuitive experience for users, regardless of your technical expertise.`}
            />
          </Match>
          <Match when={debouncedStep() === 5}>
            <div class="relative h-full w-full overflow-hidden z-50">
              <video
                src="/images/os/os3.mp4"
                autoplay={true}
                loop={true}
                muted={true}
                class="h-full object-cover w-full"
              />
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}
