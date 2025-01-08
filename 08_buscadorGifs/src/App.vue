<script setup>
import { RouterLink, RouterView } from 'vue-router'
//componentes
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <NavBar />

    <RouterView class="min-h-screen"/>

      <Footer />
  </div>
</template>

