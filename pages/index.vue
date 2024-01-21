<template>
  <div>
    <IndexBanner class="my-10 mt-20" />
    <IndexWpDesign class="my-10 mt-20" />
    <IndexWpManagement class="my-10" />
    <div class="relative">
      <img
        src="/home2.webp"
        class="hidden dark:block absolute right-0 top-0 -z-10 2xl:w-1/2"
      />
      <IndexFounder class="my-10" />
    </div>
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
useSeoMeta({
  ogImage: "https://xbyters.com/og-image.png",
});
</script>
