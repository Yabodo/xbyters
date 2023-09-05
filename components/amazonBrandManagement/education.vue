<template>
  <section class="p-4 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Education</h2>
    <div v-for="edu in education" :key="edu.id" class="mb-4">
      <h3 class="text-xl font-medium">
        {{ edu.degree }} - {{ edu.university }}
      </h3>
      <p class="text-gray-500">{{ edu.duration }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
  data() {
    return {
      education: [
        {
          id: 1,
          degree: "[Degree]",
          university: "University Name",
          duration: "[Month Year] - [Month Year]",
        },
        // ... other education details can be added in the same structure
      ],
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If you need any custom styles, you can add them here. */
</style>
