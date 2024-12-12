<script setup>
import Header from './components/Header.vue';
import Formulario from './components/Formulario.vue';
</script>

<template>
  <div class="container mt-5 p-4">
    <Header />
    <Formulario />
  </div>
</template>

<style scoped>
.container {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
