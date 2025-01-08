<script setup>
import { RouterLink, RouterView } from 'vue-router'
//vistas
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline ">Buscador de Gifs</h1>

    <nav class="flex justify-center gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/buscador">Buscador</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

