<template>
  <footer class="bg-blue-500 p-4 text-white text-center mt-auto">
    <p>© {{ currentYear }}. All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const currentYear = ref(new Date().getFullYear());

    return { currentYear };
  },
});
</script>

<style scoped>
/* TailwindCSS classes are applied in the template. If you need any custom styles, add them here. */
</style>
