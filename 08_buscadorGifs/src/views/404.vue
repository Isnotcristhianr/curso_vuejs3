<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1
        class="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        404 
      </h1>
      <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Página no encontrada
      </h2>
      <p class="text-lg text-gray-600">
        Lo sentimos, la página que buscas no existe.
      </p>
      <router-link
        to="/"
        class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >Volver a la página de inicio</router-link
      >
      <div class="mt-12">
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="404"
          class="w-full rounded-xl"
        />
      </div>
    </div>
  </div>
</template>
