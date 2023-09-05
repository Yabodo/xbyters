<template>
  <section class="p-4 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Skills</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <li
        v-for="skill in skills"
        :key="skill"
        class="py-1 px-2 bg-gray-100 rounded"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  data() {
    return {
      skills: [
        "Market Research",
        "Communication",
        "Team Management",
        // ... other skills
      ],
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If any custom styles are needed, you can add them here. */
</style>
