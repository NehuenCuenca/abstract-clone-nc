<template>
  <header class="relative sm:w-full py-5 px-4 md:px-12 bg-black font-serif text-white	">
    <nav class=" flex justify-between items-center flex-col lg:flex-row">
      <div class="flex gap-x-1 text-2xl">
        <div class="hover:opacity-80 hover:cursor-pointer">
          <i class="not-italic">🎈</i>
          <span>Abstract</span>
        </div>
        |
        <a href="#" class="hover:underline">Help Center</a>
      </div>

      <div class="flex gap-x-4 items-center lg:hidden" >
        <button type="button" class="text-2xl" @click="toggleDisplayMenu('search')">🔍</button>
        <button type="button" class="text-2xl" @click="toggleDisplayMenu('hamburger')">{{ hamburgerMenuIsOpen ? '❌' : '🍔'
        }}</button>
      </div>

      <div class="min-[320px]:hidden lg:flex gap-x-4 items-center ">
        <button type="button" class="py-2 px-5 text-2xl rounded-lg border border-white bg-neutral-900">
          Submit a request
        </button>
        <button type="button"
          class="py-2 px-8 text-2xl rounded-lg border-none bg-myIndigo hover:text-black hover:bg-white transition-colors">
          Sign in
        </button>
      </div>
      <div :class="!searchMenuIsOpen ? 'hidden' : ''"
        class="absolute h w-full top-0 left-0 py-7 px-5 flex justify-center bg-white text-black">
        <input type="text" name="" id="" placeholder="Search"
          class="p-3 text-xl rounded-md border border-black outline-none ">
        <hr>
        <button type="button" class="py-2 px-8 text-2xl " @click="toggleDisplayMenu('search')">
          ✖
        </button>
      </div>
      <div class="py-5 flex flex-col justify-center lg:hidden" v-if="hamburgerMenuIsOpen" >
        <button type="button" class="py-2 px-5 text-2xl text-white">
          Submit a request
        </button>
        <hr>
        <button type="button" class="py-2 px-8 text-2xl text-white">
          Sign in
        </button>
      </div>
    </nav>
  </header>
  
  <main class="sm:w-full">
    <button class="flex gap-1 py-3 px-6 rounded-3xl fixed z-50	bottom-3 right-5 bg-myIndigo text-white font-semibold " type="button">
      <span>❔</span>
      <span class="hidden lg:block">Help</span>
    </button>
    <form @submit.prevent class="py-32 gap-y-8 bg-myLigthPurple flex flex-col items-center w-full">
      <span class="text-2xl min-[320px]:text-4xl min-[500px]:text-5xl md:text-7xl font-semibold">How can we help?</span>
      <div class="group relative flex items-center w-4/5">
        <input
          class="w-full p-5 text-xl drop-shadow-xl rounded-md border border-black outline-none hover:border-myIndigo focus:border-myIndigo"
          type="text" name="" id="" placeholder="Search" />
        <span
          class="absolute z-10 right-4 text-2xl font-semibold hover:text-myIndigo group-hover:text-myIndigo transition-colors">-></span>
      </div>
    </form>

    <ul id="caracteristics-list"
      class="w-full place-content-center py-44 min-[320px]:px-10 xl:px-36 lg:px-28 md:px-16 grid gap-y-16 gap-x-5 grid-cols-1 md:grid-cols-2 auto-rows-auto items-start">
      <li class="grid grid-cols-[.25fr_1fr] auto-rows-auto gap-5"
        v-for="(caracteristic, idxCaracteristic) in caracteristicImages" :key="idxCaracteristic">
        <img class="max-h-24" :src="relativePathOfImage(caracteristic.image)" alt="caracteristic">
        <div class="flex flex-col items-start gap-y-3 text-2xl">
          <span class="font-bold">{{ caracteristic.title }}</span>
          <p>{{ caracteristic.description }}</p>
          <a href="#" class="text-myIndigo hover:underline">Learn more -></a>
        </div>
      </li>
    </ul>
  </main>

  <footer class="sm:w-full py-11 px-16 grid gap-10 min-[375px]:grid-cols-1 sm:grid-cols-2 bg-black text-white">
    <div class="grid min-[400px]:grid-cols-2 min-[1270px]:grid-cols-4 gap-5">
      <div class="flex flex-col">
        <span class="text-2xl font-bold">Abstract</span>
        <ul class="pt-3">
          <li class="font-semibold hover:underline hover:cursor-pointer">Start trial</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Pricing</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Download</li>
        </ul>
      </div>
      <div class="flex flex-col ">
        <span class="text-2xl font-bold">Resources</span>
        <ul class="pt-3">
          <li class="font-semibold hover:underline hover:cursor-pointer">Blog</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Help center</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Release notes</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Status</li>
        </ul>
      </div>
      <div class="flex flex-col ">
        <span class="text-2xl font-bold">Community</span>
        <ul class="pt-3">
          <li class="font-semibold hover:underline hover:cursor-pointer">Twitter</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">LinkedIn</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Facebook</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Dribble</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Podcast</li>
        </ul>
      </div>
      <div class="flex flex-col ">
        <span class="text-2xl font-bold">Company</span>
        <ul class="pt-3">
          <li class="font-semibold hover:underline hover:cursor-pointer">About us</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Careers</li>
          <li class="font-semibold hover:underline hover:cursor-pointer">Legal</li>
        </ul>
      </div>
    </div>

    <div class="place-self-start sm:place-self-end flex flex-col">
      <i class="not-italic text-3xl">🎈</i>
      <span>© Copyright 2023</span>
      <span>Abstract Studio Design, Inc.</span>
      <span>All rights reserved</span>
    </div>
  </footer>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {

    // REFS
    const widthWindow = ref(0)
    const hamburgerMenuIsOpen = ref(false)
    const searchMenuIsOpen = ref(false)

    // METHODS
    const checkWidthWindow = () => {
      const { width } = window.screen
      widthWindow.value = width
      return width
    }

    const toggleDisplayMenu = (menu) => {
      switch (menu) {
        case 'hamburger':
          hamburgerMenuIsOpen.value = !hamburgerMenuIsOpen.value
          break;
        case 'search':
          searchMenuIsOpen.value = !searchMenuIsOpen.value
          break;
      }
    }

    const relativePathOfImage = (name) => {
      const pathUrlImage = new URL(`./assets/caracteristics/${name}`, import.meta.url).href
      return pathUrlImage
    }

    // LIFECYCLE
    onMounted(() => {
      addEventListener('resize', checkWidthWindow)
      checkWidthWindow();
    })

    // CONSTRAINTS
    const caracteristicImages = [
      {
        image: "branch.png",
        title: "Using Abstract",
        description:
          "Abstract lets you manage, version, and document your designs in one place.",
      },
      {
        image: "two-people.png",
        title: "Manage your account",
        description:
          "Configure your account settings, such as your email, profile details, and password.",
      },
      {
        image: "puzzle.png",
        title: "Manage organizations, teams, and projects",
        description:
          "Use Abstract organizations, teams, and projects to organize your people and your work.",
      },
      {
        image: "dollar-sign.png",
        title: "Manage billing",
        description: "Change subscriptions and payment details.",
      },
      {
        image: "key.png",
        title: "Authenticate to Abstract",
        description:
          "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      },
      {
        image: "message-sign.png",
        title: "Abstract support",
        description: "Get in touch with a human.",
      },
    ];


    return {
      widthWindow,
      hamburgerMenuIsOpen,
      searchMenuIsOpen,
      relativePathOfImage,
      toggleDisplayMenu,
      caracteristicImages,
    };
  },
};
</script>

<style></style>
