<script>
export default {
    data: () => ({
        search: '',
        searchType: 'gifs' // Por defecto GIFs
    }),
    methods: {
        getData() {
            console.log(this.search);
            this.$emit('buscar', this.search, this.searchType === 'stickers');
            this.search = '';
        }
    }
}
</script>

<template>
    <div class="text-center flex flex-col items-center gap-4">
        <form @submit.prevent="getData" class="flex flex-col md:flex-row items-center gap-4 bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl">
            <input 
                v-model.trim="search" 
                type="text" 
                class="form-control rounded-lg px-4 py-2 w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                placeholder="¿Qué estás buscando?"
            >
            <div class="flex items-center gap-4">
                <div class="flex gap-4 bg-gray-100 p-2 rounded-lg">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            v-model="searchType"
                            value="gifs"
                            class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        >
                        <span class="text-gray-700">GIFs</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            v-model="searchType"
                            value="stickers"
                            class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        >
                        <span class="text-gray-700">Stickers</span>
                    </label>
                </div>
                <button 
                    type="submit" 
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                    <span>Buscar</span>
                    <span class="text-xl">🔎</span>
                </button>
            </div>
        </form>
    </div>
</template>