<script setup lang="ts">
import { Teleport } from 'vue';
import { useModalStore } from '../stores/modal.store';
import CardContent from './CardContent.vue';

defineOptions({
    name: 'Modal'
})

const { closeModal } = useModalStore()
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div class="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div class="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                    <h2 class="text-xl font-semibold text-gray-800">Carrito de Compras</h2>
                    <button 
                        @click="closeModal"
                        class="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
                    >
                        ❌
                    </button>
                </div>

                <div class="overflow-x-auto">
                    <CardContent />
                </div>
            </div>
        </div>
    </Teleport>
</template>
