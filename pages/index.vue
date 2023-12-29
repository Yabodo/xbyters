<template>
  <div>
    <IndexBanner class="my-10 mt-20" />
    <IndexCycle class="my-5" />
    <IndexCompanies class="my-10" />
    <IndexTestimonials class="my-10" />
    <IndexCta class="my-10 pt-5 h-96 flex flex-col justify-center" />
  </div>
</template>
<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "indexx",
});
useHead({
  title: "Home - xbyters",
  meta: [
    {
      name: "description",
      content:
        "We understand that every business is unique, and cookie-cutter solutions won't suffice. We take a personalized approach, tailoring our services to meet your specific needs and objectives. Our team will work closely with you to understand your requirements and create a customized solution that aligns with your brand identity and goals.",
    },
  ],
});
</script>
