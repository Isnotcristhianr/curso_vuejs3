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
    <img src="../src/assets/logo.svg" alt="Vue logo" width="125">
    <small>
      <h1>Contador en Vue Js 3</h1>
      <p> Desarrollado por: <a href="https://github.com/Isnotcristhianr" target="_blank">Isnotcristhianr</a></p>
    </small>
    <hr>
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar()"> +1</button>
    <button @click="decrementar()"> -1</button>
    <button @click="reset()"> Reset</button>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
    margin-top: 20px;
    padding: 20px;
  }

  h1{
    font-weight: bolder;
    color: #2c3e50;
    font-size: 2.5rem;
  }

  small {
    font-size: 1.5rem;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
    color: #42b983;
  }

  button {
    cursor: pointer; 
    font-size: 1.2rem;
    padding: 5px 5px;
    margin: 0 8px;
    border-radius: 5px;
    color: #fff;
    background-color: #42b983;
  }
</style>
