import { Meta, Title } from "@solidjs/meta";

export default function SEO(props: { title: string; image: string }) {
  return (
    <>
      <Meta name="twitter:image:src" content={props.image} />
      <Meta name="twitter:site" content="@github" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={props.title} />
      <Meta
        name="twitter:description"
        content="KOOMPI together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
      />
      <Meta property="og:image" content={props.image} />
      <Meta
        property="og:image:alt"
        content="KOOMPI together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
      />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="600" />
      <Meta property="og:site_name" content="GitHub" />
      <Title>{props.title}</Title>
    </>
  );
}
