<template>
  <div v-if="!gotchaCookies" class="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-white dark:bg-slate-800 p-2 shadow-lg sm:p-3">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex w-0 flex-1 items-center">
            <span class="flex rounded-lg bg-blue-800 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 512 512"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="h-6 w-6 text-white"
              >
                <path
                  fill="currentColor"
                  d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                ></path>
              </svg>
            </span>
            <p class="ml-3 truncate font-medium text-slate-800 dark:text-white">
              <span
                >This website uses performance and analytical cookies to improve
                user experience!</span
              >
            </p>
          </div>
          <div
            @click="acceptTracking()"
            class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto cursor-pointer"
          >
            <div
              class="flex items-center justify-center rounded-md border border-transparent bg-blue-800 dark:bg-slate-100 px-4 py-2 text-sm font-medium dark:text-slate-800 text-white shadow-sm hover:bg-blue-900 dark:hover:bg-slate-200"
            >
              Got it!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const gotchaCookies = useCookie("gotchaCookies");

function acceptTracking() {
  gotchaCookies.value = "true";
}
</script>
