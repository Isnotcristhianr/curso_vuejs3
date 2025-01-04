<script>
import Formulario from "./Formulario.vue";
import Grid from "./Grid.vue";

export default {
  components: {
    Formulario,
    Grid,
  },
  data() {
    return {
      cotizacion: null,
      cripto: "",
      moneda: "",
      precio: 0,
      simbolo: "",
      img: "",
    };
  },
  methods: {
    async cotizar(cripto, moneda) {
      console.log('Valores recibidos:', cripto, moneda);
      if (cripto && moneda) {
        this.cripto = cripto;
        this.moneda = moneda;
        await this.obtenerCotizacion();
      }
    },
    async obtenerCotizacion() {
      try {
        if(!this.cripto || !this.moneda){
          console.log('Faltan valores de cripto o moneda');
          return;
        }

        const res = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.cripto}&tsyms=${this.moneda}`
        );
        const data = await res.json();
        this.cotizacion = data.DISPLAY[this.cripto][this.moneda];
        this.precio = this.cotizacion.PRICE;
        this.simbolo = this.cotizacion.FROMSYMBOL;
        this.img = data.DISPLAY[this.cripto][this.moneda].IMAGEURL;
        console.log('Datos de la API:', data);
      } catch (error) {
        console.error("Error al obtener cotización:", error);
      }
    },
  },
};
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

      <Formulario @cotizar="cotizar" />
      <Grid
        v-if="cotizacion"
        :cripto="cripto"
        :moneda="moneda"
        :cotizacion="cotizacion"
        :img="img"
        :precio="precio"
        :simbolo="simbolo"
      />
    </div>
  </div>
</template>
