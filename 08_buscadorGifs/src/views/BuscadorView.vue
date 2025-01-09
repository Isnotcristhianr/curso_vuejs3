<script>
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Loading from '../components/Loading.vue';
export default {
    components: {
        Card,
        Search,
        Loading
    }, 
    data: () => ({
        loading: false,
        gifs: [],
        isSticker: false
    }),
    methods: {
        async getGifs(search, isSticker) {
            this.loading = true;
            this.isSticker = isSticker;
            const type = isSticker ? 'stickers' : 'gifs';
            const data = await fetch(`https://api.giphy.com/v1/${type}/search?api_key=5cp9ocezQxOinkfv0PRP85PRB5eOit8u&q=${search}`);
            const res = await data.json();
            this.gifs = res.data;
            this.loading = false;
        }
    }
}

</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto mb-12">
            <h2 class="text-5xl text-center font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Buscador de {{ isSticker ? 'Stickers' : 'GIFs' }}
            </h2>
            <p class="text-center text-gray-600 text-lg">Encuentra los mejores {{ isSticker ? 'stickers' : 'GIFs' }} para compartir</p>

            <!-- Search -->
            <div class="my-8">
                <Search @buscar="getGifs" />
            </div>
        </div>

        <!-- Loading -->
        <div class="flex justify-center my-8">
            <Loading v-if="loading" />
        </div>

        <!-- Gifs -->
        <div v-if="!loading && gifs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="gif in gifs" :key="gif.id" class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Card :gifs="gif" />
            </div>
        </div>

        <!-- No results -->
        <div v-if="!loading && gifs.length === 0" class="text-center text-gray-500 my-12">
            <p class="text-xl">No se encontraron resultados</p>
        </div>
    </div>
</template>