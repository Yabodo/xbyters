<template>
  <header class="p-4 text-white m-2">
    <h1 class="text-3xl font-semibold">{{ fullName }}</h1>
    <p class="text-lg">{{ phoneNumber }} | {{ emailAddress }}</p>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      fullName: "Kaspar Jõeveer",
      phoneNumber: "+372 5373 3662",
      emailAddress: "kjoeveer@gmail.com",
    };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template */
</style>
