<script>
export default {
    data: () => ({
        search: ''
    }),
    methods: {
        getData() {
            console.log(this.search);
            this.$emit('buscar', this.search);
            this.search = '';
        }
    }
}
</script>

<template>
    <div class="text-center flex justify-center">
        <form action="" @submit.prevent="getData" class="flex justify-center bg-gray-200 rounded-lg p-4">
            <input v-model.trim="search" type="text" class="form-control rounded mx-4 text-center" placeholder="Escribe...">
            <button type="submit" class="btn btn-primary">🔎</button>
        </form>
    </div>
</template>