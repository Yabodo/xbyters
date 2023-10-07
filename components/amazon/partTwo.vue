<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <section class="my-8 text-center">
      <!-- Image placeholder -->
      <div class="my-6 bg-gray-200 h-56 w-full">
        <img
          alt="feature"
          class="object-cover object-center h-full w-full"
          src="/amz3.png"
        />
      </div>
    </section>

    <section class="my-8">
      <h1 class="text-3xl font-bold mb-4">Services Offered by Xbyters</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="service in services" :key="service.title">
          <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
    <section class="my-8 p-4">
      <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">
        Why Xbyters?
      </h1>
      <ul class="list-decimal pl-5">
        <li class="mb-4 flex">
          <span class="icon-placeholder mr-2 text-blue-500">🔹</span>
          <p>
            <strong>Experience:</strong> We bring years of experience in the
            e-commerce realm, understanding its nuances and challenges.
          </p>
        </li>
        <li class="mb-4 flex">
          <span class="icon-placeholder mr-2 text-blue-500">🔹</span>
          <p>
            <strong>Custom Solutions:</strong> No two businesses are the same.
            Get services tailored to your unique needs.
          </p>
        </li>
        <li class="flex">
          <span class="icon-placeholder mr-2 text-blue-500">🔹</span>
          <p>
            <strong>End-to-End Assistance:</strong> From product research to
            marketing, benefit from a comprehensive suite of services.
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Product Insights",
    description:
      "Utilize our deep understanding of e-commerce trends to pick the right products. Benefit from insights on sales trends, profitability potential, and competition analysis.",
  },
  {
    title: "Keyword Mastery",
    description:
      "Unlock the potential of effective keyword research. With Xbyters, discover high-potential keywords that align with your products, ensuring visibility and relevance.",
  },
  {
    title: "Listing Optimization",
    description:
      "Create compelling and high-converting product listings with our expert guidance. From keyword integration to content creation, optimize every aspect for maximum impact.",
  },
  {
    title: "Performance Analytics",
    description:
      "Gain a holistic view of your business performance. Analyze sales, revenue, customer behavior, and much more to inform your strategic decisions.",
  },
  {
    title: "Competitive Analysis",
    description:
      "Stay ahead of the curve with our detailed competitor analysis. Identify opportunities, threats, and strategies to outperform your rivals.",
  },
  {
    title: "Inventory Mastery",
    description:
      "Never experience stockouts or excess inventory again. Optimize stock levels based on historical sales data and market predictions.",
  },
  {
    title: "Feedback & Review Management",
    description:
      "Build and maintain a sterling reputation with effective feedback and review management. Engage with your customers and foster loyalty.",
  },
  {
    title: "Pay-Per-Click (PPC) Campaigns",
    description:
      "Optimize advertising campaigns for maximum ROI. With Xbyters, streamline bid management, reporting, and analytics for impactful PPC strategies.",
  },
]);
</script>

<style scoped>
/* Custom styles or overrides for TailwindCSS can go here */
</style>
