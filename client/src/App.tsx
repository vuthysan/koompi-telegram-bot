import { Component, lazy } from "solid-js";
import { Route, Routes, useLocation } from "@solidjs/router";

import About from "./pages/about";
import Coming from "./components/Coming";
import E13 from "./pages/koompi/e13";
import E13Speces from "./pages/koompi/e13/spece";
import Footer from "./components/Footer";
import Home from "./pages";
import { MetaProvider } from "@solidjs/meta";
import Mini from "./pages/koompi/mini";
import Monitor from "./pages/koompi/monitor";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404";
import OS from "./pages/os";
import OneLab from "./pages/onelab";
import Project from "./pages/project";

const E11 = lazy(() => import("./pages/koompi/e11"));
const E11Speces = lazy(() => import("./pages/koompi/e11/spece"));

const App: Component = () => {
  const location = useLocation();
  return (
    <>
      <MetaProvider>
        {/* {location.pathname !== "/koompi/os" && <Navbar />} */}
        <div class="relative">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/koompi">
              <Route path="/" component={Home} />
              <Route path="/e11/overview" component={E11} />
              <Route path="/e11/specs" component={E11Speces} />
              <Route path="/e13/overview" component={E13} />
              <Route path="/e13/specs" component={E13Speces} />
              <Route path="/mini/overview" component={Mini} />
              <Route path="/mini/specs" component={Mini} />
              <Route path="/monitor" component={Monitor} />
              <Route path="/os" component={OS} />
              <Route path="/onelab" component={OneLab} />
            </Route>
            <Route path="/projects" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Coming} />
            <Route path="/*" component={NotFound} />
          </Routes>
        </div>

        {/* {location.pathname !== "/koompi/os" && <Footer />} */}
      </MetaProvider>
    </>
  );
};

export default App;