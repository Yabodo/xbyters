<template>
  <section class="p-4 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Professional Experience</h2>
    <div v-for="job in jobs" :key="job.id" class="mb-4">
      <h3 class="text-xl font-medium">{{ job.title }} - {{ job.company }}</h3>
      <p class="text-gray-500">{{ job.duration }}</p>
      <ul class="list-disc pl-5 mt-2">
        <li v-for="duty in job.duties" :key="duty" class="mb-1">{{ duty }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfessionalExperience",
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Brand Manager",
          company: "XYZ Corp",
          duration: "[Month Year] - Present",
          duties: [
            "Conducted comprehensive market research...",
            "Managed a team of 15 members...",
            // ... other duties
          ],
        },
        // ... other job experiences can be added in the same structure
      ],
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If you need any custom styles, you can add them here. */
</style>
