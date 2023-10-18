<template>
  <header class="w-full bg-black font-serif text-white py-5 px-24">
    <nav class="flex justify-between items-center">
      <div class="flex gap-x-1 text-2xl">
        <div>
          <i class="not-italic">🎈</i>
          <span>Abstract</span>
        </div>
        |
        <a href="#" class="hover:underline">Help Center</a>
      </div>

      <div class="flex gap-x-4 items-center">
        <button type="button" class="py-2 px-5 text-2xl rounded-lg border border-white bg-neutral-900">
          Submit a request
        </button>
        <button type="button"
          class="py-2 px-8 text-2xl rounded-lg border-none bg-myIndigo hover:text-black hover:bg-white transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  </header>
  <main class="w-full">
    <button class="py-3 px-6 rounded-3xl fixed bottom-3 right-5 bg-myIndigo text-white font-semibold " type="button">
      ❔ Help
    </button>
    <form class="py-32 gap-y-8 bg-myLigthPurple flex flex-col items-center w-full">
      <span class="text-7xl font-semibold">How can we help?</span>
      <div class="group relative flex items-center w-2/4">
        <input
          class="w-full p-5 text-xl drop-shadow-xl rounded-md border border-black outline-none hover:border-myIndigo focus:border-myIndigo"
          type="text" name="" id="" placeholder="Search" />
        <span class="absolute z-10 right-4 text-2xl font-semibold hover:text-myIndigo group-hover:text-myIndigo transition-colors">-></span>
      </div>
    </form>

    <ul class="w-full py-44 px-36 grid gap-4 grid-cols-2 auto-rows-auto place-items-center">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </main>
  <footer></footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
