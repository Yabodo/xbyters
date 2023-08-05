<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import lottie from "lottie-web";
//import "@lottiefiles/lottie-interactivity";

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById("lottie-animation")!, // the DOM element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/404.json", // the path to the animation json
  });
});

definePageMeta({
  layout: "indexx",
});

const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <div class="flex items-center">
    <div
      class="relative flex flex-col-reverse px-4 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full"
    >
      <div
        class="opacity-10 hidden lg:flex z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
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
              Looks like you've found the doorway to the great
              <span class="text-blue-500 dark:text-blue-400">nothing</span>!
            </h2>
            <p class="text-center md:text-left">
              Sorry about that, there sure was something here! Please visit our
              hompage to get where you need to go.
            </p>
            <div class="mt-8 flex justify-center md:justify-start">
              <a
                @click="handleError"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Head back home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
