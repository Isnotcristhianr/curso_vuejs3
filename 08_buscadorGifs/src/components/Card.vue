<script>
export default {
    props: ['gifs']
}

</script>

<template>
    <div>
        <div class="text-center">
            <img :src="gifs.images.original.url" :alt="gifs.id" loading="lazy">
        </div>
        <div class="p-4 shadow-md">
            <h3>{{ gifs.title }}</h3>
        </div>
    </div>
</template>