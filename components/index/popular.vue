<template>
  <div
    class="text-2xl tracking-tight sm:leading-none mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
  >
    <h1
      class="mb-4 text-xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"
    >
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >Popular</span
      >
      with clients
    </h1>

    <div class="flex flex-wrap mx-5">
      <NuxtLink to="/ai" class="p-4 lg:w-1/2">
        <div class="overflow-hidden bg-white rounded-lg shadow-lg">
          <img
            class="object-cover w-full h-56"
            src="/futuristic-computer.png"
            alt="avatar"
          />

          <div class="py-5 px-4 text-center">
            <a href="#" class="block text-xl font-bold" tabindex="0" role="link"
              >AI Services</a
            >
            <span class="text-sm"
              >We have everything you need to transform your business with AI,
              from custom chatbots to autonomous agents. Schedule a call now so
              we could discuss your needs!</span
            >
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/websites" class="p-4 lg:w-1/2">
        <div class="overflow-hidden bg-white rounded-lg shadow-lg">
          <img
            class="object-cover w-full h-56"
            src="/futuristic-website.png"
            alt="avatar"
          />

          <div class="py-5 px-4 text-center">
            <a href="#" class="block text-xl font-bold" tabindex="0" role="link"
              >Website Management</a
            >
            <span class="text-sm"
              >We do everything for websites - from making them to taking care
              of them. If you pick us, you get everything in one place. This
              means we work together well, talk clearly, and make your website
              awesome.</span
            >
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
