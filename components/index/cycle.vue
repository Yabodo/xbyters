<template>
  <div class="mx-auto max-w-screen-xl px-4 flex">
    <section class="body-font mx-auto">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0">
              {{ title }}
            </h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              {{ content }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            v-for="section in sections"
            :key="section.title"
            class="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                :src="section.image"
              />
            </div>
            <h2 class="text-xl font-medium title-font mt-5">
              {{ section.title }}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              {{ section.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeSection = ref(null);
const title = ref("IT Project Lifecycle");
const content = ref(
  "Perfection comes from experience. This is how you are guided from Ideation to Iteration: A Journey Through Creation."
);
const sections = ref([
  {
    title: "Design",
    image: "/design.webp",
    content:
      "Our design services include Market Research, Product Conceptualization, User Experience (UX) Design, and User Interface (UI) Design.",
  },
  {
    title: "Development",
    image: "/development.webp",
    content:
      "Our development encompasses Planning, Development Process, Quality Assurance, and Deployment.",
  },
  {
    title: "Marketing",
    image: "/marketing.webp",
    content:
      "Our marketing services include Branding, Content Marketing, Social Media Marketing, Paid Advertising, SEO, Public Relations, and Customer Feedback & Support.",
  },
]);
</script>

<style scoped>
/* Add any additional Tailwind or other styles if needed */
</style>
