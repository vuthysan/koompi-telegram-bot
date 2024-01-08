import "./index.css";
import "remixicon/fonts/remixicon.css";

import App from "./App";
import { CartProvider } from "./contexts/cart";
import { Router } from "@solidjs/router";
import { createEffect } from "solid-js";
/* @refresh reload */
import { render } from "solid-js/web";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

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
