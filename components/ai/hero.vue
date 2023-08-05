<template>
  <div
    class="relative flex flex-col-reverse px-4 mx-auto lg:block lg:flex-col lg:py-16 xl:py-24 md:px-8 sm:max-w-xl md:max-w-full"
  >
    <div
      class="hidden lg:flex z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
    >
      <div class="w-fit" id="lottie-animation"></div>
    </div>
    <div
      class="my-16 lg:my-0 relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="animate__animated animate__slideInRight max-w-xl mb-6">
          <h2
            class="text-center md:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none"
          >
            Limited knowledge chatbots,
            <span class="text-blue-500 dark:text-blue-400">farewell</span>!
          </h2>
          <p class="text-center md:text-left">
            In an age where business efficiency and personalized customer
            interactions are paramount, xbyters offers bespoke AI chatbot
            solutions. Our custom-built chatbots not only streamline operations
            and reduce human error but also deliver engaging, personalized
            customer experiences round-the-clock. Don't let your business miss
            the chance to create a future-ready, customer-centric brand. Connect
            with us today and learn more about how our tailor-made AI chatbots
            can revolutionize your business operations!
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
        path: "/ai.json", // the path to the animation json
      });
    });
  },
});
</script>
