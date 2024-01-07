<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <slot />

    <Footerr />
    <CookieNoticer />
  </div>
</template>

<script>
export default {
  name: "indexx",
};
</script>
