import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <div class="bg-primary relative">
      <footer class="footer container mx-auto p-10 text-neutral-content">
        <div>
          <img src="/images/Koompi-White1.png" class="h-16" alt="KOOMPI" />
          <div class="flex gap-4 text-3xl">
            <i class="ri-facebook-fill"></i>
            <i class="ri-linkedin-fill"></i>
            <i class="ri-youtube-fill"></i>
            <i class="ri-telegram-fill"></i>
            <i class="ri-twitter-fill"></i>
          </div>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-2 w-full">
          <div>
            <h3 class="font-bold text-lg">Legal</h3>
            <div class="link link-hover my-2">Terms & Conditions</div>
            <div class="link link-hover my-2">Privacy Policy</div>
            <div class="link link-hover my-2">Sales Policy</div>
          </div>
          <div>
            <h3 class="font-bold text-lg">Information</h3>
            <div class="link link-hover my-2">News and Events</div>
            <div class="link link-hover my-2">Ask Me Anything</div>
            <div class="link link-hover my-2">Become a Contribute</div>
          </div>

          <div>
            <h3 class="font-bold text-lg">Help</h3>
            <div class="link link-hover my-2">Community</div>
            <div class="link link-hover my-2">User manual</div>
            <div class="link link-hover my-2">Branding</div>
          </div>
        </div>
      </footer>
      <div class="bg-white flex gap-2 justify-center p-2">
        <p>We accept: </p>
        <img src="/images/weaccept.png" alt="" class="h-6" />
      </div>
    </div>
  );
}
