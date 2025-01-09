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
        gifs: []
    }),
    methods: {
        async getGifs(search) {
            this.loading = true;
            const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5cp9ocezQxOinkfv0PRP85PRB5eOit8u&q=${search}`)
            const res = await data.json();
            this.gifs = res.data;
            this.loading = false;
            console.log(this.gifs);
        }
    }
}

</script>

<template>
    <div>
        <h2 class="text-4xl text-center font-semibold">Buscador de Gifs</h2>
        <p class="text-center text-gray-500">Busca tus gifs favoritos</p>

        <!-- Search -->
         <div class="m-4">
            <Search @buscar="getGifs" />
         </div>

         <!-- Loading -->
            <Loading v-if="loading" />

        <!-- Gifs -->
        <div class="grid grid-cols-3 gap-4">
            <div v-for="gif in gifs" :key="gif.id" class="rounded-lg shadow-md bg-gray-100 p-2">
                <Card :gifs="gif" />
            </div>
        </div>
    </div>
</template>