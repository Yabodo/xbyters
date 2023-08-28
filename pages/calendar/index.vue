<template>
  <!-- Calendly inline widget begin -->
  <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/xbyters/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b172a&text_color=ffffff"
    style="min-width: 320px; height: 901px"
  ></div>
  <!-- Calendly inline widget end -->
</template>
<script setup lang="ts">
useHead({
  title: "Contact - xbyters",
  script: [{ src: "https://assets.calendly.com/assets/external/widget.js" }],
});
</script>
