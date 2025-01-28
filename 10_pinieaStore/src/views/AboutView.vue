<script setup lang="ts">
import { useProductStore } from '../stores/product.store'

const {products, addProduct} = useProductStore()
console.log(products)
</script>

<template>
  <div>
    <hr>
    <div class="text-white text-center">
      <h3>Selecciona un producto: </h3>
    </div>
    <br>
    <div class="flex flex-wrap justify-center">
      <div class="grid grid-cols-2 gap-4 text-center align-items-center ">

        <div
          v-for="product in products.available"
          :key="product.id"
          class="card border p-2"
        >
          <img :src="product.img" alt="product.name" class="w-10 h-10 rounded-full text-center">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <button @click="addProduct(product)"
          class="btn btn-primary hover:bg-blue-500"
          >+</button>
        </div>
      </div>
    </div>
  </div>
</template>


