<script setup lang="ts">
import { useModalStore } from '../stores/modal.store'
import { useProductStore } from '../stores/product.store'
import Modal from '../components/Modal.vue'
const {modalValue, openModal} = useModalStore();

const products = useProductStore()
</script>

<template>
    <div>

        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">Pinia Store</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><a>Articulos</a></li>
                    <li><a @click="openModal">🛒</a></li>
                </ul>
            </div>
        </div>
        <Modal v-if="modalValue.isOpen">
            <CardContent />
        </Modal>
    </div>
</template>