<template>
  <aiHero />
  <div>
    <aiFrameworks />
    <aiTypeCards class="mb-12" />
    <aiSix-features />
    <aiFounder />
    <aiBlog-teaser />
    <aiCat />
  </div>
</template>
<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "indexx",
});
useHead({
  title: "AI assistants - xbyters",
  meta: [
    {
      name: "description",
      content:
        "We understand that every business is unique, and cookie-cutter solutions won't suffice. We take a personalized approach, tailoring our services to meet your specific needs and objectives. Our team will work closely with you to understand your requirements and create a customized solution that aligns with your brand identity and goals.",
    },
  ],
});
</script>
