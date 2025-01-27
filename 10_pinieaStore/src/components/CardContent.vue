<script setup lang="ts">
import { useProductStore } from '../stores/product.store';

const products = useProductStore()
</script>

<template>
    <div class="content">
        <h1 class="text-2xl font-bold">Articulos</h1>
        <div v-if="products.products.quantity() > 0">
            <h1 class="text-white">No hay articulos</h1>
        </div>
        <div v-else>
            <!-- tavka de id, nombre, precio, cantidad, img y lista de compras -->
             <table>
                <th>
                    <td>id</td>
                    <td>nombre</td>
                    <td>precio</td>
                    <td>cantidad</td>
                    <td>img</td>
                    <td>Accion</td>
                </th>
             </table>
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
        </div>
    </div>
</template>