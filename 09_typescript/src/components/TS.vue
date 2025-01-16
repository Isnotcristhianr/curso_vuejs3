<script setup lang="ts">
import store from '../store/store';
import { defineComponent, ref } from 'vue';

const person = defineComponent({
    name: 'Persona',
    setup() {
        return {
            store
        }
    }
})

</script>

<template>
  <div>
    <h1>Typescript</h1>
    <hr />
    <h2>Personas</h2>
    <p>Nombre: {{ store.nombre   }}</p>
    <p>Apellido: {{ store.apellido }}</p>
    <p>Edad: {{ store.edad }}</p>
    <p>Estado: {{ store.estado }}</p>  
    <button @click="store.crecer">Crecer</button>
    <button @click="store.decrecer">Decrecer</button>
    <button @click="store.state">Cambiar estado</button>
  </div>
</template>