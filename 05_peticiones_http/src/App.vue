<script setup>
import { ref } from "vue";
import Bienvenida from "./Bienvenida.vue";
import Axios from "./axios.vue";
import Fetch from "./fetch.vue";
const vistaActual = ref("Bienvenida"); // 'axios' o 'fetch'

const cambiarVista = (vista) => {
  vistaActual.value = vista;
};
</script>

<template>
  <div class="container">
    <h1 class="text-center">Peticiones HTTP</h1>
    <hr />
    <div class="d-flex justify-content-center">
      <button
        hidden
        class="btn btn-primary m-2"
        @click="cambiarVista('Bienvenida')"
        :class="{ active: vistaActual === 'Bienvenida' }"
      >
        Bienvenida
      </button>
      <button
        class="btn btn-primary m-2"
        @click="cambiarVista('fetch')"
        :class="{ active: vistaActual === 'fetch' }"
      >
        Fetch
      </button>
      <button
        class="btn btn-primary m-2"
        @click="cambiarVista('axios')"
        :class="{ active: vistaActual === 'axios' }"
      >
        Axios
      </button>
    </div>

    <component
      :is="
        vistaActual === 'Bienvenida'
          ? Bienvenida
          : vistaActual === 'axios'
          ? Axios
          : Fetch
      "
    />
  </div>
</template>

<style scoped></style>
