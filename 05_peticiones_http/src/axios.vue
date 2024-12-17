<script>
import axios from "axios";
import CardMoney from "./components/CardMoney.vue";
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default {
  data() {
    return {
      respuesta: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async axiosGet() {
      try {
        this.loading = true;
        const res = await axios.get(url);
        this.respuesta = res.data;
      } catch (error) {
        this.error = error;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  components: {
    CardMoney,
  },
};
</script>

<template>
  <div class="container">
    <div class="text-center">
      <h1 class="display-4 mb-4">Bitcoin Price Index</h1>
      <button class="btn btn-primary mb-4" @click="axiosGet" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
        {{ loading ? "Cargando..." : "Obtener Precios Actuales" }}
      </button>
    </div>

    <!-- Estado de carga y error -->
    <div v-if="loading" class="alert alert-info text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger">
      <i class="bi bi-exclamation-triangle me-2"></i>
      Error: {{ error.message }}
    </div>

    <!-- Contenido principal -->
    <div v-if="respuesta && !loading">
      <div class="text-center mb-4">
        <p class="text-muted">
          <i class="bi bi-clock me-2"></i>
          Actualizado: {{ respuesta.time.updated }}
        </p>
      </div>

      <div class="row">
        <div class="col-md-4" v-for="(moneda, codigo) in respuesta.bpi" :key="codigo">
          <CardMoney
            :code="moneda.code"
            :description="moneda.description"
            :rate="moneda.rate"
            :symbol="moneda.symbol"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.display-4 {
  color: #2c3e50;
  font-weight: 600;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.alert {
  border-radius: 8px;
  padding: 1rem;
}

.text-muted {
  font-size: 0.9rem;
}
</style>