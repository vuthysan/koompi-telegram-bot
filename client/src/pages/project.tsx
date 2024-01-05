import MyProject from "../components/Project";
import SEO from "../components/SEO";

export default function Project() {
  return (
    <div>
      <SEO title="Projects - KOOMPI" image="/images/seo/home.png" />
      <MyProject
        data={<video src="/images/KOOMPIOS3_Teaser.mp4" autoplay loop muted />}
        title="KOOMPI OS"
        desc=" KOOMPI OS is a multi purpose OS, which may be used for both desktop
            and enterprise servers. Our R&D team continues to advance more
            features with a focus toward areas such as Blockchain, P2P, and AI."
        link="/koompi/os"
        target=""
      />

      <MyProject
        data={<video src="/images/weteka_video.mp4" autoplay loop muted />}
        title="Weteka"
        desc="Weteka is a virtual platform for students, teachers, and
        professionals to share their knowledge with other students."
        link="https://weteka.org"
        target="_blank"
      />

      <MyProject
        data={<img src="/images/onelab-control-4.png" class="w-full h-full" />}
        title="ONELAB"
        desc="Onelabs are advanced learning, teaching, work and study
        environments, centered around a local independent server at each
        school."
        link="/koompi/onelab"
        target=""
      />
    </div>
  );
}
