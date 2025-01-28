<script setup lang="ts">
import { Teleport } from 'vue';
import { useModalStore } from '../stores/modal.store';
import CardContent from '../components/CardContent.vue';

const {closeModal} = useModalStore()
</script>

<template>
    <div>
    <Teleport to="body">
        <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-white p-4 rounded-md">
                    <slot >
                        <CardContent />
                    </slot>
                    <button @click="closeModal">❌</button>
            </div>
        </div>
    </Teleport>
    </div>
</template>