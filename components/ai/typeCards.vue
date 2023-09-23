<template>
  <div
    class="text-2xl tracking-tight text-gray-900 dark:text-gray-100 sm:leading-none mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
  >
    <div class="container px-6 py-10 mx-auto">
      <h1 class="">Types of application</h1>

      <div
        class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"
      >
        <div v-for="section in sections" class="w-full">
          <div class="px-4 py-2">
            <h1
              class="text-xl font-bold text-gray-800 uppercase dark:text-white"
            >
              {{ section.title }}
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {{ section.content }}
            </p>
          </div>

          <img
            class="object-cover w-full h-48 mt-2"
            :src="section.image"
            :alt="section.title"
          />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">Free consultation</h1>
            <a
              href="/contact"
              class="px-2 py-1 text-xs font-semibold text-gray-900 transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
            >
              Let's chat!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sections = ref([
  {
    title: "AI Art",
    image: "/ai_art.webp",
    content:
      "Concept: An AI system that creates unique pieces of art based on user preferences or curated styles. Monetization: Sell AI-generated artwork, offer subscription services for regular art updates, or license the technology to art platforms.",
  },
  {
    title: "AI Voice",
    image: "/ai_voice.webp",
    content:
      "Concept: A sophisticated voice synthesis system that can mimic any voice or create unique voice profiles. Potential: Broad applications from entertainment to telecommunication. Can be used for personalized voice assistants or digital actors.",
  },
  {
    title: "AI Girlfriend",
    image: "/ai_girlfriend.webp",
    content:
      "Concept: A virtual companion designed for social interaction, emotional support, and companionship. Potential: Addresses loneliness in an increasingly digital world but raises ethical concerns about genuine human connections and potential misuse.",
  },
  {
    title: "AI Voiceover",
    image: "/ai_voiceover.webp",
    content:
      "Concept: AI that provides voiceover services for videos, presentations, or advertisements, offering customization in terms of accent, tone, and emotion. Potential: Reduces the need for hiring voiceover artists for standard tasks. Offers scalability and consistency for large projects.",
  },
  {
    title: "AI Employee",
    image: "/ai_employee.webp",
    content:
      "Concept: A virtual assistant that handles administrative tasks, schedules appointments, manages customer queries, or analyzes business data. Potential: Can significantly reduce overhead costs and streamline operations. Particularly useful for repetitive tasks or data analysis.",
  },
  {
    title: "AI Twin",
    image: "/ai_twin.webp",
    content:
      "Concept: A digital twin of a user, mimicking their behavior, preferences, and decision-making patterns. It can be used to pre-test decisions or provide personalized recommendations. Potential: Personalized user experience across platforms and for decision-making assistance.",
  },
  {
    title: "AI Memory",
    image: "/ai_memory.webp",
    content:
      "Concept: An AI system that helps users remember past events, details, and experiences, potentially integrated with augmented reality. Potential: Great for the elderly or those with memory conditions. Also useful for professionals trying to recall specific events or data.",
  },
  {
    title: "AI Music Video",
    image: "/ai_music_video.webp",
    content:
      "Concept: An AI that creates custom music videos based on a song's lyrics, mood, and beat. Potential: Revolutionizes the music industry by reducing production costs and times. Offers personalized music video experiences for users.",
  },
  {
    title: "AI Podcast",
    image: "/ai_podcast.webp",
    content:
      "Concept: AI-driven content creation where the AI discusses trending topics, answers queries, or interviews virtual guests. Potential: Can create endless content tailored to specific listener preferences or niches.",
  },
  {
    title: "AI Trainer",
    image: "/ai_trainer.webp",
    content:
      "Concept: A personal fitness and health coach that creates customized workout and diet plans based on individual biometrics and goals. Potential: Can replace or supplement personal trainers. Has the potential for integration with wearables for real-time feedback.",
  },
  {
    title: "AI Podcast Host",
    image: "/ai_podcast_host.webp",
    content:
      "Concept: A virtual podcast host that can moderate discussions, interview real or virtual guests, and adapt content based on listener feedback. Potential: Consistent content delivery without the need for a human host. Can cater to niche topics and adapt to changing listener preferences.",
  },
  {
    title: "AI Blog",
    image: "/ai_blog.webp",
    content:
      "A platform where users input a topic, and the AI generates a blog post based on the most recent and relevant information. It could be beneficial for content marketers and businesses looking for quick content generation.",
  },
]);
</script>
