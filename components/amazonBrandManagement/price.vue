<template>
  <section class="p-4 m-2">
    <h2 class="text-2xl font-semibold mb-4">Pricing</h2>
    <div v-for="item in prices" :key="item.id" class="mb-4 border p-4 rounded">
      <h3 class="text-xl font-medium">{{ item.product }}</h3>
      <p class="text-gray-500 mb-2">{{ item.description }}</p>
      <p class="text-green-500 font-bold text-lg">{{ item.price }}</p>
      <amazonBrandManagementExpertise />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Price",
  data() {
    return {
      prices: [
        {
          id: 1,
          product: "",
          description: "Europe, Estonia, Tartu",
          price: "€20/hour",
        },
        // ... other product prices can be added in the same structure
      ],
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If you need any custom styles, you can add them here. */
</style>
