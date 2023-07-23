<template>
  <Hero />
  <div>
    <Frameworks />
    <gallery />
    <six-features />
    <blog-teaser />
    <cat />
  </div>
</template>
<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "indexx",
});
useHead({
  title: "xbyters",
  meta: [
    {
      name: "description",
      content:
        "We understand that every business is unique, and cookie-cutter solutions won't suffice. We take a personalized approach, tailoring our services to meet your specific needs and objectives. Our team will work closely with you to understand your requirements and create a customized solution that aligns with your brand identity and goals.",
    },
  ],
});
</script>
