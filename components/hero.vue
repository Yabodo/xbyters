<template>
  <div
    class="relative flex flex-col-reverse px-4 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full"
  >
    <div
      class="hidden lg:block z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
    >
      <div id="lottie-animation"></div>
    </div>
    <div
      class="my-16 lg:my-0 relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="animate__animated animate__slideInRight max-w-xl mb-6">
          <h2
            class="text-center md:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none"
          >
            We will bring your business online so you don't have to.
          </h2>
          <p class="text-center md:text-left">
            We stay up-to-date with the latest trends and technologies in web
            development. Our team leverages cutting-edge tools, frameworks, and
            methodologies to deliver innovative and future-proof solutions. By
            working with us, you can benefit from the latest advancements in the
            industry. Take your website off your plate!
          </p>
          <div class="mt-8 flex justify-center md:justify-start">
            <NuxtLink
              to="/contact"
              type="submit"
              class="gtm-hero-contact inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
            >
              Book a call
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import lottie from "lottie-web";
//import "@lottiefiles/lottie-interactivity";

export default defineComponent({
  name: "YourComponent",
  setup() {
    onMounted(() => {
      lottie.loadAnimation({
        container: document.getElementById("lottie-animation")!, // the DOM element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/unicycle.json", // the path to the animation json
      });
    });
  },
});
</script>
