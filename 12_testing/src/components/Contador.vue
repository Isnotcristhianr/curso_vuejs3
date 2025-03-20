<script>
export default {
    data: () => ({
        msg: 'Contador',
        count: 0
    }),
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        reset() {
            this.count = 0
        }
    }
}
</script>

<template>
    <div>
        <h2>{{ msg }}: {{ count }}</h2>
        <button id="increment" @click="increment">Incrementar</button>
        <button id="decrement" @click="decrement">Decrementar</button>
        <button id="reset" @click="reset">Reiniciar</button>
    </div>
</template>
