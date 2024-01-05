import { For } from "solid-js";
import SEO from "../components/SEO";
import data from "../data/team.json";
import photos from "../data/galleries.json";
export default function About() {
  return (
    <div>
      <SEO title="About - KOOMPI" image="/images/seo/about.png" />
      <div data-aos="zoom-in" class="relative lg:h-[100vh] h-[70vh]">
        <img
          src="/images/4925-1.jpg"
          alt="About KOOMPI"
          class="h-full w-[100%]"
        />
        <div class="absolute md:py-0 py-8 bg-primary/90 flex justify-center items-center flex-col backdrop-blur-[5px] top-0 left-0 w-full h-full">
          <h3 class="col-span-2 mb-8 font-black lg:text-9xl text-3xl text-white ">
            About
          </h3>
          <p class="lg:text-2xl text-base lg:w-[60vw] w-80 text-center text-white">
            <b>KOOMPI</b>, in synergy with its operating system <b>KOOMPI OS</b>
            , provides a comprehensive array of value-added learning and
            productivity tools built on the renowned Linux platform. With a
            curated selection of custom applications, <b>KOOMPI OS</b> is
            thoughtfully designed and continuously supported to cater to the
            diverse needs of students and employees, empowering them in their
            educational and professional endeavors.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in-up" class="relative lg:h-[100vh] h-[70vh]">
        <img
          src="/images/pexels-rodolfo-clix-1036936.jpg"
          alt="KOOMPI Vision"
          class="h-full w-[100%]"
        />
        <div class="absolute md:py-0 py-8 bg-primary/90  flex justify-center items-center flex-col backdrop-blur-[10px] top-0 left-0 w-full h-full">
          <h3 class="col-span-2 mb-8 font-black lg:text-9xl text-3xl text-white ">
            Vision
          </h3>
          <p class="lg:text-3xl text-xl lg:w-[60vw] w-full text-center text-white">
            Our vision is to create a tech-driven education and innovation space
            that empowers individuals to unleash their full potential and drive
            positive progress.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in-up" class="relative lg:h-[100vh] h-[70vh]">
        <img
          src="/images/mission.jpg"
          alt="KOOMPI Mission"
          class="h-full w-[100%]"
        />
        <div class="absolute md:py-0 py-8 bg-primary/90 flex justify-center items-center flex-col backdrop-blur-[10px] top-0 left-0 w-full h-full">
          <h3 class="col-span-2 mb-8 font-black lg:text-9xl text-3xl text-white ">
            Mission
          </h3>
          <p class="lg:text-3xl text-xl lg:w-[60vw] w-full text-center text-white">
            Our mission is to build tools and empower individuals with
            accessible computing solutions that drive progress, foster learning,
            and inspire innovation.
          </p>
        </div>
      </div>

      {/* Talent People */}
      <div data-aos="zoom-in-up" class="container m-auto">
        <h3 class="col-span-2 font-black lg:text-9xl text-5xl text-primary/20 text-center mt-20">
          Our Talents
        </h3>
        <h3 class="col-span-2 font-black lg:text-5xl text-2xl text-primary text-center uppercase ">
          People
        </h3>
        <p class="lg:text-xl text-base lg:w-[60vw] w-full text-dark text-center my-10">
          At KOOMPI, we believe in the power of talents to drive innovation and
          create exceptional experiences. Our team is comprised of dedicated
          professionals from diverse backgrounds, bringing together expertise in
          technology, design, education, and more. With a shared passion for
          empowering individuals and fostering progress, our talents work
          collaboratively to develop cutting-edge solutions, deliver outstanding
          customer experiences, and make a positive impact in the world of
          education and innovation. Together, we strive to unlock the full
          potential of talents within our team and unleash the unlimited
          possibilities that lie ahead.
        </p>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-3 mt-5 mb-8">
          <For each={data}>
            {(user) => {
              return (
                // <div class="p-3 bg-primary/5 rounded-lg">
                //   <img
                //     src={user.photo}
                //     alt={`${user.fullname} KOOMPI`}
                //     class="rounded-md"
                //   />
                //   <h2 class="text-lg text-center mt-3 font-bold">
                //     {user.fullname}
                //   </h2>
                //   <h3 class="text-center opacity-80">{user.position}</h3>
                // </div>
                <div>
                  <div class="avatar">
                    <div class="w-3/4 mask mask-hexagon mx-auto shadow-lg ">
                      <img src={user.photo} alt={`${user.fullname} KOOMPI`} />
                    </div>
                  </div>
                  <h2 class="text-lg text-center mt-3 font-bold">
                    {user.fullname}
                  </h2>
                  <h3 class="text-center opacity-80">{user.position}</h3>
                </div>
              );
            }}
          </For>
        </div>
      </div>

      {/* Our Gallery */}
      <div data-aos="zoom-in-up" class="container m-auto">
        <h3 class="col-span-2 font-black lg:text-9xl text-5xl text-primary/20 text-center mt-20">
          Our Gallery
        </h3>
        <h3 class="col-span-2 font-black lg:text-5xl text-2xl text-primary text-center uppercase">
          Activities
        </h3>

        <div class="grid md:grid-cols-5 grid-cols-2 gap-2 m-8">
          <For each={photos}>
            {(photo) => {
              return (
                <img
                  src={photo.src}
                  class="object-cover h-full rounded-lg"
                  alt=""
                />
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
}
