<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="p-8 rounded shadow-xl sm:p-16">
      <div class="flex flex-col lg:flex-row">
        <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2
            class="font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none"
          >
            Ready to take your <br class="hidden md:block" />
            business to
            <span class="inline-block text-blue-800 dark:text-blue-600"
              >new heights</span
            >?
          </h2>
        </div>
        <div class="lg:w-1/2">
          <p class="mb-4 text-base text-gray-700 dark:text-slate-200">
            Achieve digital success - with expertise in cutting-edge
            technologies and innovative design, we can create a stunning website
            that captures your brand essence and captivates your target
            audience.
          </p>
          <div class="pt-1">
            <NuxtLink
              to="/contact"
              type="submit"
              class="gtm-cat-contact cursor-pointer inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
            >
              Book a call
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
