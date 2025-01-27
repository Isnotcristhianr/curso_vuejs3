<script setup lang="ts">
import { useProductStore } from '../stores/product.store'

const {products, addProduct} = useProductStore()
console.log(products)
</script>

<template>
  <div>
    <h1>About</h1>
  </div>
</template>


