<script setup lang="ts">
const { data } = await useAsyncData("blog", () =>
  queryContent("/").only(["title", "description", "date", "_path"]).find()
);
useHead({
  title: "Blog - xbyters",
});
</script>

<template>
  <header class="py-16 sm:text-center">
    <h1
      class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200"
    >
      Latest Updates
    </h1>
    <p class="text-lg text-slate-700 dark:text-slate-400">
      All the latest Xbyters posts, straight from the team.
    </p>
    <section class="mt-3 max-w-sm sm:mx-auto sm:px-4">
      <h2 class="sr-only">Sign up for our newsletter</h2>
      <form
        action="https://app.convertkit.com/forms/5375791/subscriptions"
        method="post"
        class="flex flex-wrap -mx-2"
      >
        <div class="px-2 grow-[9999] basis-64 mt-3">
          <div class="group relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
            >
              <path
                d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"
              ></path>
              <path d="m6 7 6 5 6-5"></path></svg
            ><input
              name="email_address"
              type="email"
              required
              autocomplete="email"
              aria-label="Email address"
              class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
              placeholder="Subscribe via email"
            />
          </div>
        </div>
        <div class="px-2 grow flex mt-3">
          <button
            type="submit"
            class="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  </header>
  <div
    class="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]"
  >
    <div
      class="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"
    ></div>
    <div class="space-y-16">
      <article class="relative group" v-for="post in data">
        <div
          class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"
        ></div>
        <svg
          viewBox="0 0 9 9"
          class="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
        >
          <circle
            cx="4.5"
            cy="4.5"
            r="4.5"
            stroke="currentColor"
            class="fill-white dark:fill-slate-900"
            stroke-width="2"
          ></circle>
        </svg>
        <div class="relative">
          <h3
            class="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0"
          >
            {{ post.title }}
          </h3>
          <div
            class="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2"
          >
            <p>
              {{ post.description }}
            </p>
          </div>
          <dl
            class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
          >
            <dt class="sr-only">Date</dt>
            <dd class="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
              <time>{{ post.date }}</time>
            </dd>
          </dl>
        </div>
        <NuxtLink
          class="flex items-center text-sm text-sky-500 font-medium"
          :to="post._path"
          ><span
            class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
          ></span
          ><span class="relative"
            >Read more<span class="sr-only"
              >, New changelog template + the biggest Tailwind UI update
              ever</span
            ></span
          ><svg
            class="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path></svg
        ></NuxtLink>
      </article>
    </div>
  </div>
  <BlogCat />
</template>
