<script setup lang="ts">
import TS from './components/TS.vue';
import { defineComponent } from 'vue';

const ts = defineComponent({
    name: 'TS',
    setup() {
        return {
            TS
        }
    }
})

</script>

<template>
  <TS />
</template>
