<script setup>
import { RouterLink, RouterView } from "vue-router";

/* router location */
import { useRoute } from "vue-router";

const route = useRoute();
const navigation = [
  { name: "Home", path: "/", current: route.path === "/" },
  { name: "Buscador", path: "/buscador", current: route.path === "/buscador" },
  { name: "About", path: "/about", current: route.path === "/about" },
];
</script>

<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <RouterLink
          to="/"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Buscador de Gifs</span
          >
        </RouterLink>
        <ul
          class="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li v-for="item in navigation" :key="item.name">
            <RouterLink
              :to="item.path"
              class="hover:underline"
              >{{ item.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <hr
            class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025
        <a href="https://github.com/Isnotcristhianr" class="hover:underline">Isnotcristhianr</a>.
        Most of all rights reserved.</span
      >
    </div>
  </footer>
</template>
