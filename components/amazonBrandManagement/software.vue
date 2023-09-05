<template>
  <section class="p-4 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Software Proficiency</h2>
    <ul class="space-y-2">
      <li
        v-for="software in softwareList"
        :key="software"
        class="py-1 px-2 bg-gray-100 rounded"
      >
        {{ software }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Software",
  data() {
    return {
      softwareList: [
        "ClickUp",
        // ... other software/tools
      ],
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If any custom styles are needed, you can add them here. */
</style>
