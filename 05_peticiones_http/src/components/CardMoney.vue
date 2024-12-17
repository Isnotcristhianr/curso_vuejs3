<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    }
  },
};
</script>

<template>
  <div class="currency-card">
    <div class="card-header">
      <span class="currency-code">{{ code }}</span>
    </div>
    <div class="card-body">
      <h3 class="currency-name">{{ description }}</h3>
      <div class="rate-value">
        <span v-html="symbol"></span>
        {{ rate }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.currency-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.currency-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.currency-code {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.card-body {
  padding: 1.5rem;
  text-align: center;
}

.currency-name {
  color: #34495e;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.rate-value {
  color: #27ae60;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .currency-card {
    margin-bottom: 1rem;
  }
  
  .rate-value {
    font-size: 1.5rem;
  }
}
</style>
