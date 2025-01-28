<script setup lang="ts">
import { useProductStore } from '../stores/product.store';
import { useModalStore } from '../stores/modal.store';

const products = useProductStore();
const modal = useModalStore();
</script>

<template>
  <main class="container mx-auto px-4 py-8">
      <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">
        Bienvenido a nuestra Tienda
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Descubre nuestra selección de productos de alta calidad a los mejores precios
      </p>
    </div>

    <!-- Productos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="product in products.products.available" 
           :key="product.id"
           class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <!-- Imagen -->
        <div class="relative h-48 overflow-hidden">
          <img 
            :src="product.img" 
            :alt="product.name"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Contenido -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
          
          <div class="flex justify-between items-center mb-4">
            <span class="text-2xl font-bold text-blue-600">${{ product.price.toFixed(2) }}</span>
            <span class="text-sm text-gray-500">Stock: {{ product.quantity }}</span>
          </div>

      
        </div>
      </div>
    </div>

  </main>
</template>
