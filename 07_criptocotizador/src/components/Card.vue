<script>
import Formulario from './Formulario.vue';
import Grid from './Grid.vue';

export default {
    components: {
        Formulario,
        Grid
    }, 
    data() {
        return {
            cotizacion: {},
            cripto: '',
            moneda: ''
        }
    },
    methods: {
        cotizar(cripto, moneda) {
            this.cripto = cripto;
            this.moneda = moneda;
        }
    }
}
</script>

<template>
  <div class="max-w-2xl mx-auto mt-10">
    <div class="bg-gray-50 border border-gray-100 rounded-lg p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-light text-gray-800 mb-3">Cripto Cotizador</h2>
        <div class="text-sm text-gray-600">
          Desarrollado por
          <a 
            href="https://github.com/Isnotcristhianr" 
            class="font-medium text-gray-800 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            IsnotCristhianr
          </a>
        </div>
      </div>
      
      <div class="h-px bg-gray-200 my-6"></div>
      
      <Formulario 
        @cotizar="cotizar"
      />
      <Grid 
        :cripto="cripto"
        :moneda="moneda"
      />
    </div>
  </div>
</template>
