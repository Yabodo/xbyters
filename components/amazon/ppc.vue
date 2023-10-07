<template>
  <section class="lg:flex lg:justify-center">
    <div
      class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl"
    >
      <div class="lg:w-1/2">
        <div
          class="h-64 bg-cover lg:h-full"
          style="
            background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
          "
        ></div>
      </div>

      <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <h2
          class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        >
          All the PPC you need 😉
        </h2>

        <li v-for="benefit in benefits" :key="benefit.title" class="mb-2">
          <strong>{{ benefit.title }}:</strong> {{ benefit.description }}
        </li>

        <div class="mt-8 flex justify-center md:justify-start">
          <NuxtLink
            to="/contact"
            type="submit"
            class="gtm-hero-contact inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
          >
            Book a free call
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "XbytersBenefits",

  setup() {
    const benefits = ref([
      {
        title: "Endless Keywords",
        description:
          "Dive into a vast ocean of keywords, specifically curated for Amazon and Walmart. We mean, who needs such abundant choices, right?",
      },
      {
        title: "Untapped Discoveries",
        description:
          "Non-English phrases, popular typos, and those hidden gems you never knew were essential. It's like treasure hunting, minus the pirates.",
      },
      {
        title: "Boosted Traffic & Sales",
        description:
          "Not just a gentle nudge, but a full-throttle boost in your organic traffic and sales. (It's alright if you're into that sort of success story.)",
      },
      {
        title: "Top-notch Algorithms",
        description:
          "Our advanced tech does the heavy lifting, bringing you closer to marketplace dominance. But if you prefer the old school methods, we understand.",
      },
      {
        title: "Dedicated Support",
        description:
          "Got a query? Our team is just a click away. But only if you fancy real-time assistance from industry experts.",
      },
    ]);

    return { benefits };
  },
});
</script>

<style scoped>
/* You can add or adjust styles here if needed */
</style>
