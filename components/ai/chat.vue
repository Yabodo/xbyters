<template>
  <div
    class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex sm:items-center justify-between py-3">
      <div class="relative flex items-center space-x-4">
        <div class="relative">
          <img
            src="/robot.svg"
            alt=""
            class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
          />
        </div>
        <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center relative">
            <p class="mr-3"><span class="text-green-500">●</span> Mr. Robot</p>
          </div>
          <p class="text-sm">xbyters blog enthusiast</p>
        </div>
      </div>
    </div>
    <div
      id="messages"
      class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-0 scrolling-touch"
    >
      <div class="chat-messages" v-for="(message, i) in messages" key="i">
        <div v-if="message.ai" class="flex items-end">
          <div
            class="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-900"
                >{{ message.message }}</span
              >
            </div>
          </div>
          <img
            src="/robot.svg"
            alt="My profile"
            class="w-6 h-6 rounded-full order-1"
          />
        </div>
        <div v-else class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end">
            <div>
              <span
                class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white"
                >{{ message.message }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="chat-messages" v-if="botTyping">
        <div class="flex items-end">
          <div
            class="flex flex-col space-y-2 max-w-xs mx-2 order-2 items-start"
          >
            <div>
              <span
                class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-900 font-bold"
                >Typing...</span
              >
            </div>
          </div>
          <img
            src="/robot.svg"
            alt="My profile"
            class="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
    </div>
    <div class="px-4 pt-4 mb-2 sm:mb-0">
      <form @submit.prevent="sendMessage">
        <div class="relative flex">
          <span class="absolute inset-y-0 flex items-center">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            v-model="query"
            type="text"
            placeholder="Write your message!"
            class="w-full focus:outline-none text-gray-900 dark:text-gray-100 placeholder-slate-600 dark:placeholder-slate-400 pl-12 bg-slate-200 dark:bg-slate-800 rounded-md py-3"
          />
          <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <span class="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-6 w-6 ml-2 transform rotate-90"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const query = ref("");
const botTyping = ref(false);
const messages = ref([
  {
    ai: true,
    message: "Hi! How can I help you today?",
  },
]);

function sendMessage() {
  if (!botTyping.value) {
    let userMessage = query.value;
    botTyping.value = true;
    messages.value.push({ ai: false, message: query.value });
    query.value = "";
    useFetch("/api/test", {
      method: "post",
      body: { question: userMessage },
    })
      .then((response) => {
        messages.value.push({ ai: true, message: response.data.value });
      })
      .finally(() => {
        botTyping.value = false;
      });
  } else {
    return;
  }
}
</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>
