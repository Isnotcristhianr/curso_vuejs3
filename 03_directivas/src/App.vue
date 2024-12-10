<script setup>
import { ref } from "vue";

//v-text
const text = ref("");

//v-html
const html = "<marquee style='color: red;'>Hola</marquee>";

//v-show
const show = ref(true);

//v-if
const showIfElse = ref(true);

//v-for
const items = ref(["item1", "item2", "item3", "item4", "item5"]);

</script>

<template>
  <div class="container">
    <h1 class="title">Directivas en Vue.js</h1>
    <hr class="divider" />
    
    <section class="section">
      <h2>V-Text</h2>
      <div class="input-group">
        <label for="text">Texto:</label>
        <input type="text" id="text" v-model="text" class="input" />
      </div>
      <p class="result">{{ text }}</p>
    </section>
    
    <section class="section">
      <h2>V-Html</h2>
      <p v-html="html"></p>
    </section>
    
    <section class="section">
      <h2>V-Show</h2>
      <p v-show="show" class="directive-demo">Soy una directiva</p>
      <button @click="show = !show" class="btn">Mostrar/Ocultar</button>
    </section>

    <section class="section">
      <h2>V-If / V-Else</h2>
      <p v-if="showIfElse" class="directive-demo">Soy true</p>
      <p v-else class="directive-demo">Soy false</p>
      <button @click="showIfElse = !showIfElse" class="btn">Cambiar</button>
    </section>

    <section class="section">
      <h2>V-For</h2>
      <ul class="list">
        <li v-for="item in items" :key="item" class="list-item">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.divider {
  border: none;
  border-top: 2px solid #eee;
  margin: 2rem 0;
}

.section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.section h2 {
  color: #42b883;
  margin-top: 0;
}

.input-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
}

.btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #3aa876;
}

.directive-demo {
  padding: 1rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 0.5rem;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.result {
  padding: 1rem;
  background: white;
  border-radius: 4px;
  min-height: 1rem;
}
</style>
