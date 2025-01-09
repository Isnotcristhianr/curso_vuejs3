<script>
export default {
    props: ['gifs']
}

</script>

<template>
    <div class="bg-white">
        <div class="relative group">
            <img 
                :src="gifs.images.original.url" 
                :alt="gifs.title" 
                loading="lazy"
                class="w-full h-64 object-cover"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
        <div class="p-4">
            <h3 class="text-gray-800 font-medium text-sm line-clamp-2">{{ gifs.title || 'Sin título' }}</h3>
            <div class="mt-2 flex justify-between items-center">
                <a 
                    :href="gifs.images.original.url" 
                    target="_blank" 
                    class="text-blue-600 hover:text-blue-800 text-sm"
                >
                    Ver original
                </a>
                <span class="text-xs text-gray-500">
                    {{ new Date(gifs.import_datetime).toLocaleDateString() }}
                </span>
            </div>
        </div>
    </div>
</template>