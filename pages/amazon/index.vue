<template>
  <amazonHero />
  <div>
    <AmazonPartOne class="m-12" />
    <AmazonPartTwo class="m-12" />
    <AmazonPartThree class="m-12" />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "indexx",
});
useHead({
  title: "Marketing Management - xbyters",
  meta: [
    {
      name: "description",
      content:
        "We understand that every business is unique, and cookie-cutter solutions won't suffice. We take a personalized approach, tailoring our services to meet your specific needs and objectives. Our team will work closely with you to understand your requirements and create a customized solution that aligns with your brand identity and goals.",
    },
  ],
});
</script>
