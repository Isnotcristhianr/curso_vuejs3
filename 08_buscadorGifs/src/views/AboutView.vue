<template>
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Acerca de GifHub
            </h1>

            <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-600 mb-6">
                        GifHub es una aplicación web moderna diseñada para hacer que la búsqueda de GIFs y Stickers sea una experiencia 
                        agradable y eficiente. Utilizamos la API de GIPHY para proporcionarte acceso a una amplia biblioteca de contenido 
                        animado.
                    </p>

                    <h2 class="text-2xl font-semibold mb-4">Características Principales</h2>
                    <ul class="space-y-4 text-gray-600">
                        <li class="flex items-start">
                            <span class="text-blue-600 mr-2">✓</span>
                            Búsqueda instantánea de GIFs y Stickers
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 mr-2">✓</span>
                            Interfaz moderna y responsiva
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 mr-2">✓</span>
                            Visualización optimizada de resultados
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-600 mr-2">✓</span>
                            Acceso directo a contenido original
                        </li>
                    </ul>
                </div>
            </div>

            <div class="text-center">
                <h3 class="text-2xl font-semibold mb-6">¿Listo para comenzar?</h3>
                <router-link 
                    to="/buscador" 
                    class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                    Ir al Buscador
                </router-link>
            </div>

            <footer class="mt-16 text-center text-sm text-gray-500">
                <p>Desarrollado con ❤️ usando Vue.js y Tailwind CSS</p>
                <p class="mt-2">Powered by GIPHY API</p>
            </footer>
        </div>
    </div>
</template>