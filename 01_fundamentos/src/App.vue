<script>
export default {
  data() {
    return {
      contador: 10
    }
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
    reset() {
      this.contador = 0;
    }
  }
}
</script>

<template>
  <div class="container">
    <img src="../src/assets/logo.svg" alt="Vue logo" width="125" class="logo">
    <div class="header">
      <h1>Contador en Vue Js 3</h1>
      <p>Desarrollado por: <a href="https://github.com/Isnotcristhianr" target="_blank">Isnotcristhianr</a></p>
    </div>
    <hr>
    <div class="counter-container">
      <h2>Contador: <span class="counter-value">{{ contador }}</span></h2>
      <div class="buttons-container">
        <button class="btn increment" @click="incrementar()">+1</button>
        <button class="btn decrement" @click="decrementar()">-1</button>
        <button class="btn reset" @click="reset()">Reset</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 600px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.header {
  margin-bottom: 2rem;
}

h1 {
  font-weight: 700;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
}

a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  color: #3aa876;
}

hr {
  border: none;
  height: 2px;
  background-color: #e9ecef;
  margin: 2rem 0;
}

.counter-container {
  padding: 1rem;
}

.counter-value {
  color: #42b983;
  font-size: 3rem;
  font-weight: 700;
}

.buttons-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.increment {
  background-color: #42b983;
}

.decrement {
  background-color: #e74c3c;
}

.reset {
  background-color: #7f8c8d;
}
</style>
