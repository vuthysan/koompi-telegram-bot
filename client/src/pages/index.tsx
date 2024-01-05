import "solid-slider/slider.css";

import { A } from "@solidjs/router";
import ProductCard from "../components/ProductCard";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div>
      <SEO title="KOOMPI" image="/images/seo/home.png" />

      <div class="container m-auto">
        {/* Product List */}
        <h2 class="font-extrabold md:text-4xl my-0 text-3xl text-center text-primary md:my-14  py-8">
          Hardware Products
        </h2>

        <ProductCard
          img="ministation.png"
          title="KOOMPI Ministation"
          desc="Ministation. An all-inclusive, professional powerhouse ready to be incorporated seamlessly into your workplace, classroom, or within the comfort of your own home."
          inch="24-inch"
          link="/koompi/mini/overview"
          cols={1}
        />

        <div class="grid md:grid-cols-2 grid-cols-1  gap-4 content-center mb-8">
          <ProductCard
            img="e11.png"
            title="KOOMPI E11"
            desc="Built for students, the KOOMPI E11 is your starting point for computing. As compact as the E13, but lighter. No compromise on open-source performance. Perfect for students on the go."
            inch="11.6-inch"
            link="/koompi/e11/overview"
            cols={2}
          />
          <ProductCard
            img="e13.png"
            title="KOOMPI E13"
            desc="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact"
            inch="13.3-inch"
            link="/koompi/e13/overview"
            cols={2}
          />
          <ProductCard
            img="contentserver.jpg"
            title="KOOMPI Mini"
            desc="An all-inclusive, professional powerhouse ready to be incorporated seamlessly into your workplace, classroom, or within the comfort of your own home. Meet the KOOMPI MiniStation."
            inch=""
            link="/koompi/mini/overview"
            cols={2}
          />
          <ProductCard
            img="monitor.png"
            title="KOOMPI Monitor"
            desc="You can never have “too many” tabs with the KOOMPI Monitor. Simultaneously display more documents, media, and projects to get more done in less time."
            inch="24-inch"
            link="/koompi/monitor"
            cols={2}
          />
        </div>
      </div>
    </div>
  );
}
