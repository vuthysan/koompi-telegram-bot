import { Component } from "solid-js";
import SEO from "../components/SEO";

const OneLab = () => {
  return (
    <>
      <SEO title="Onelab - KOOMPI" image="/images/seo/onelab.png" />

      <div class="relative md:h-[100vh] h-screen w-[100%] ">
        <img src="/images/onelab-control-4.png" class="w-full h-full" />
        <Banner />
      </div>
      <div class="bg-white">
        <LabSolution />
        <ContentServer />
      </div>
    </>
  );
};

export default OneLab;

export const Banner: Component = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      class="absolute md:py-0 py-8 md:bg-primary/80 bg-primary flex justify-center gap-8 items-center flex-col backdrop-blur-[9px] top-0 left-0 w-full h-full"
    >
      <h1
        class="font-black lg:text-9xl text-3xl text-white glitch"
        data-glitch="ONELAB"
        data-aos="fade-up"
      >
        ONELAB
      </h1>
      <p class="lg:text-2xl text-lg lg:w-[45vw] w-full text-center text-white">
        Onelabs are advanced learning, teaching, work and study environments,
        centered around a local independent server at each school.
      </p>
    </section>
  );
};

export const LabSolution: Component = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      class="container mx-auto py-36 flex justify-center gap-8 items-center flex-col"
    >
      <h1 class="font-black lg:text-6xl text-3xl text-primary text-center ">
        Lab Solution
      </h1>
      <p class="lg:text-2xl px-6 lg:px-0 text-lg lg:w-[40vw] w-full text-center text-base-600 ">
        Curriculum updates are distributed by teachers and administrators
        through the local server, which is uniform and compatible with all other
        participating schools in Cambodia.
      </p>
      <img alt="onelab" src="/images/computer-lab.png" class="w-full" />
    </section>
  );
};

export const ContentServer: Component = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      class="hero min-h-screen container mx-auto pb-36 flex justify-center gap-8 items-center flex-col"
    >
      <h1 class="font-black lg:text-6xl text-3xl text-primary text-center ">
        Content Server
      </h1>
      <p class="lg:text-2xl px-6 lg:px-0 text-lg lg:w-[40vw] w-full text-center text-base-600">
        Offline Learning Hub for students, and teachers in remote areas with
        little to no internet access. It is made with ease of use in mind.
      </p>
      <div class="hero-content flex-col lg:flex-row">
        <img src="/images/contentserver-2.jpg" class="lg:max-w-3xl " />
        <div class="px-9 lg:px-2">
          <h3 class="text-xl font-semibold lg:text-3xl mb-3">Features:</h3>
          <ul class="list-image-[url(/public/images/KoompiBlackLogo-2.png)] text-sm list-outside">
            <li class="text-lg mb-2">
              Offline learning contents (STEM video, Wiki Khmer...)
            </li>
            <li class="text-lg mb-2">
              Integrated with Weteka (Formerly Weteka.org)
            </li>
            <li class="text-lg mb-2">Cloud Synchronization</li>
            <li class="text-lg mb-2">Wifi Hotspot and Network Integration</li>
            <li class="text-lg mb-2">Custom offline learning contents</li>
            <li class="text-lg mb-2">User and Mobile Friendly</li>
            <li class="text-lg mb-2">Minimal Training</li>
            <li class="text-lg mb-2">Storage (512GB - 4TB)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
