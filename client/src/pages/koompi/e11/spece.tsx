import { A } from "@solidjs/router";
import Subnavbar from "../../../components/Subnavbar";

export default function E11Speces() {
  return (
    <>
      <Subnavbar
        title="KOOMPI E11"
        overviewLink="/koompi/e11/overview"
        techLink="/koompi/e11/specs"
      />

      <div class="container mx-auto md:px-0 px-2">
        <div class="my-12">
          <h2 class="text-3xl font-bold text-center">KOOMPI E11</h2>
          <img src="/images/e11.png" class="w-2/4 mx-auto" alt="koompi e11" />

          <div class="text-center">
            <div>Color</div> <p class="font-bold text-lg">Light Sky Blue</p>
          </div>
        </div>

        {/* <div class="flex gap-x-14 h-32 items-center">
          <div class="md:text-2xl text-lg w-[250px]  font-bold">Operating System</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">KOOMPI OS</h3>
        </div> */}

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">
            Operating System
          </div>
          <h3 class="text-xl font-bold">KOOMPI OS</h3>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Processor</div>
          <div class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            Intel Celeron N3350, Dual Cores
          </div>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Storage</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            eMMC 128GB + SSD M2 Slot
          </h3>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Memory</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            4GB DDR4s
          </h3>
        </div>

        {/* Display */}
        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:min-h minh-28-32 border-b-2 gap-4 py-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Display</div>
          <div class="col-span-2">
            <div class="grid md:grid-cols-3 grid-cols-2 mb-4">
              <div>
                <div>Size:</div>
                <div class="text-xl font-bold">11.6 inches</div>
              </div>
              <div>
                <div>Type:</div>
                <div class="text-xl font-bold">IPS Anti-Glare</div>
              </div>
            </div>
            <div class="grid md:grid-cols-3 grid-cols-2 mb-4">
              <div>
                <div>Resolution:</div>
                <div class="text-xl font-bold">1920 x 1080</div>
              </div>
              <div>
                <div>Aspect Ratio:</div>
                <div class="text-xl font-bold">16:9</div>
              </div>
            </div>
            <div class="grid md:grid-cols-3 grid-cols-2 mb-4">
              <div>
                <div>Screen-To-Body Ratio:</div>
                <div class="text-xl font-bold">73.44%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dimension and Weight */}
        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:min-h minh-28-32 border-b-2 gap-4 py-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">
            Dimension and Weight
          </div>
          <div class="md:col-span-1 col-span-2">
            <div class="grid md:grid-cols-3 grid-cols-2 mb-4">
              <div>
                <div>Width:</div>
                <div class="text-xl font-bold">190.3mm</div>
              </div>
              <div>
                <div>Height:</div>
                <div class="text-xl font-bold">277mm</div>
              </div>
            </div>
            <div class="grid md:grid-cols-3 grid-cols-2 mb-4">
              <div>
                <div>Slim:</div>
                <div class="text-xl font-bold">16.9mm</div>
              </div>
              <div>
                <div>Weight:</div>
                <div class="text-xl font-bold">0.93kg</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Material</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            Acrylonitrile Butadiene Styrene
          </h3>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">WebCam</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            0.3MP
          </h3>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Audio</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            Built-in 1W Stereo Speaker
          </h3>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-3 items-center md:h-32 h-28 border-b-2 gap-4">
          <div class="md:text-2xl text-lg col-span-1 font-bold">Battery</div>
          <h3 class="md:text-xl text-md font-bold md:col-span-1 col-span-2">
            Li-polymer battery 5000mAH up to 8H
          </h3>
        </div>
      </div>
    </>
  );
}
