<script setup lang="ts">
import { useProductStore } from '../stores/product.store';

const products = useProductStore()

defineOptions({
    name: 'CardContent'
})

</script>

<template>
    <div class="content p-4">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800">
                Artículos: 
                <span class="text-blue-600">{{ products.products.quantity() }}</span>
            </h1>
        </div>

        <div v-if="products.products.quantity() === 0" class="text-center py-8">
            <div class="text-gray-500 text-xl">No hay artículos en el carrito</div>
        </div>

        <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="product in products.products.selected" 
                        :key="product.id"
                        class="hover:bg-gray-50 transition-colors"
                    >
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ product.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ product.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${{ product.price.toFixed(2) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ product.quantity }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <img 
                                :src="product.img" 
                                :alt="product.name" 
                                class="w-12 h-12 rounded-lg object-cover border border-gray-200"
                            >
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <button 
                                @click="products.removeProduct(product)"
                                class="text-red-600 hover:text-red-800 transition-colors p-2 rounded-full hover:bg-red-50"
                                title="Eliminar producto"
                            >
                                🗑️
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>