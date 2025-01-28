<script setup lang="ts">
import { useProductStore } from '../stores/product.store';

const products = useProductStore()

defineOptions({
    name: 'CardContent'
})

</script>

<template>
    <div class="content">
        <h1 class="text-2xl font-bold">Articulos</h1>
        <div v-if="products.products.quantity() === 0">
            <h1 class="text-white">No hay articulos</h1>
        </div>
        <div v-else>
            <!-- tavka de id, nombre, precio, cantidad, img y lista de compras -->
             <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>precio</th>
                        <th>cantidad</th>
                        <th>img</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                   <tr v-for="product in products.products.selected" :key="product.id">
                       <td>{{ product.id }}</td>
                       <td>{{ product.name }}</td>
                       <td>{{ product.price }}</td>
                       <td>{{ product.quantity }}</td>
                       <td>
                           <img :src="product.img" alt="product.name" class="w-10 h-10">
                       </td>
                       <td>
                           <button @click="products.removeProduct(product)">🗑️</button>
                       </td>
                   </tr>
                </tbody>
             </table>
        </div>
    </div>
</template>