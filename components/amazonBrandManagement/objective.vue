<template>
  <section class="p-4 m-2">
    <h2 class="text-2xl font-semibold mb-2">Directive</h2>
    <p class="text-lg">{{ objectiveText }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Objective",
  data() {
    return {
      objectiveText:
        "A dedicated and results-driven professional with extensive experience in market research, team management, and project coordination. Seeking to leverage my expertise in brand management, data analysis, and team leadership in a challenging and growth-oriented role.",
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template */
</style>
