<script>
import axios from 'axios';
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default {
    data() {
        return {
            respuesta: null
        }
    },
    methods: {
        axiosGet() {
            axios.get(url)
                .then(res => this.respuesta = res.data)
                .catch(err => console.log(err))
        }
    }
}

</script>

<template>
  <div>
    <h1>Axios</h1>
    <button @click="axiosGet">
      Obtener Datos
    </button>
    <pre>{{ respuesta }}</pre>
  </div>
</template>
