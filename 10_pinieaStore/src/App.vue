<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <div class="bg-blue-500">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  
    <RouterView />
  </div>
</template>
