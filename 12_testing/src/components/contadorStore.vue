<script>
import { counterStore } from '../../store/counterStore'

export default {
    setup() {
        return {
            counterStore
        }
    }
}
</script>

<template>
    <div>
        <h2>Contador: {{ counterStore.count }}</h2>
        <button id="multiply" @click="counterStore.multiply">Multiplicar</button>
        <button id="divide" @click="counterStore.divide">Dividir</button>
        <button id="reset" @click="counterStore.reset">Reiniciar</button>
    </div>
</template>

