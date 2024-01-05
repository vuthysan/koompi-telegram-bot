import "./index.css";
import { createEffect } from "solid-js";
import App from "./App";
import { CartProvider } from "./contexts/cart";
import { Router } from "@solidjs/router";
/* @refresh reload */
import { render } from "solid-js/web";
import AOS from "aos";
import "aos/dist/aos.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

createEffect(() => {
  AOS.init();
});

render(
  () => (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  ),
  root!
);
