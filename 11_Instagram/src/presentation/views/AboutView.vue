<script setup lang="ts">
import NavBar from '../layout/NavBar.vue'
import { ref, onMounted } from 'vue'
import { CreatePublicationUseCase } from '@/domain/use-cases/post/create.Publication.use_case'
import type { PostEntity } from '@/domain/entities/post.entity'
import { PostService } from '@/services/postService'
import { PostModel } from '@/database/posts/post.model'
import { UploadService } from '@/services/uploadService'
import type { Timestamp } from 'firebase/firestore'
import type { DateTime } from 'luxon'

defineOptions({
    name: 'about-view'
})

// Estado para los posts
const posts = ref<PostEntity[]>([])
// Estado para el nuevo post
const newPost = ref<PostEntity>({
  uid: '', // Se debe obtener del usuario autenticado
  active: true,
  createdAt: new Date(),
  description: '',
  img: ''
})
// Estado para la imagen seleccionada
const selectedImage = ref('')
// Estado para el archivo de imagen seleccionado
const selectedFile = ref<File | null>(null)
// Estado para mostrar el progreso de carga
const isUploading = ref(false)
// Mensaje de error
const errorMessage = ref('')

// Cargar los posts al montar el componente
onMounted(async () => {
  await loadPosts()
})

// Función para cargar los posts
const loadPosts = async () => {
  try {
    const postService = new PostService(new PostModel())
    posts.value = await postService.findAll()
  } catch (error) {
    console.error('Error al cargar los posts:', error)
    errorMessage.value = 'Error al cargar las publicaciones'
  }
}

// Función para manejar la selección de archivo
const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    
    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
      errorMessage.value = 'Por favor, selecciona un archivo de imagen válido'
      return
    }
    
    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'La imagen es demasiado grande. El tamaño máximo es 5MB'
      return
    }
    
    selectedFile.value = file
    errorMessage.value = ''
    
    // Crear una URL para previsualizar la imagen
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

// Función para crear un nuevo post
const createPost = async () => {
  try {
    if (!selectedFile.value || !newPost.value.description) {
      errorMessage.value = 'Por favor, selecciona una imagen y añade una descripción'
      return
    }
    
    isUploading.value = true
    errorMessage.value = ''
    
    // Subir la imagen a Firebase Storage
    const imageUrl = await UploadService.uploadImage(selectedFile.value)
    
    // Crear el post con los datos correctos
    const postData: PostEntity = {
      uid: 'usuario-simulado', // ID del usuario (simulado)
      active: true,
      createdAt: new Date(), // Firebase convertirá esto a Timestamp
      description: newPost.value.description,
      img: imageUrl,
      likes: [],
      comments: []
    }
    
    // Crear el post
    await CreatePublicationUseCase.execute(postData)
    
    // Limpiar el formulario
    newPost.value = {
      uid: '',
      active: true,
      createdAt: new Date(),
      description: '',
      img: ''
    }
    selectedImage.value = ''
    selectedFile.value = null
    
    // Recargar los posts
    await loadPosts()
  } catch (error) {
    console.error('Error al crear el post:', error)
    errorMessage.value = 'Error al crear la publicación'
  } finally {
    isUploading.value = false
  }
}

// Función para formatear la fecha
const formatDate = (date: Date | Timestamp | DateTime | string) => {
  if (date instanceof Date) {
    return date.toLocaleString()
  }
  
  // Si es un Timestamp de Firebase
  if (date && typeof date === 'object' && 'toDate' in date) {
    return date.toDate().toLocaleString()
  }
  
  // Si es un DateTime de Luxon
  if (date && typeof date === 'object' && 'toISO' in date) {
    // Convertir DateTime a string ISO y luego a Date
    const isoString = date.toISO();
    if (isoString) {
      return new Date(isoString).toLocaleString();
    }
    // Si toISO() devuelve null, intentar usar otra propiedad de DateTime
    if ('toJSDate' in date && typeof date.toJSDate === 'function') {
      return date.toJSDate().toLocaleString();
    }
    return 'Fecha inválida';
  }
  
  // Si es una cadena, intentar convertirla a fecha
  if (typeof date === 'string') {
    return new Date(date).toLocaleString()
  }
  
  return 'Fecha desconocida'
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <NavBar />
    
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Título de la página -->
      <h1 class="text-2xl font-bold mb-6 text-center dark:text-white">Instagram Clone</h1>
      
      <!-- Formulario para crear un nuevo post -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-bold mb-4 dark:text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Crear nueva publicación
        </h2>
        
        <!-- Mensaje de error -->
        <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {{ errorMessage }}
        </div>
        
        <div class="md:flex md:space-x-4">
          <!-- Columna izquierda: Selección de imagen -->
          <div class="md:w-1/2 mb-4">
            <label for="image-upload" class="block mb-2 font-medium dark:text-white">Selecciona una imagen:</label>
            <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <input 
                type="file" 
                id="image-upload" 
                accept="image/*"
                @change="handleFileSelect"
                class="hidden"
              />
              <label for="image-upload" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Haz clic para seleccionar una imagen<br>
                  <span class="text-xs">PNG, JPG, GIF hasta 5MB</span>
                </p>
              </label>
            </div>
            
            <!-- Vista previa de la imagen seleccionada -->
            <div v-if="selectedImage" class="mt-4">
              <p class="mb-2 font-medium dark:text-white">Vista previa:</p>
              <div class="rounded-md overflow-hidden border dark:border-gray-600">
                <img :src="selectedImage" alt="Selected image" class="w-full object-cover" style="max-height: 300px;">
              </div>
            </div>
          </div>
          
          <!-- Columna derecha: Descripción y botón -->
          <div class="md:w-1/2">
            <div class="mb-4">
              <label for="description" class="block mb-2 font-medium dark:text-white">Descripción:</label>
              <textarea 
                id="description"
                v-model="newPost.description"
                class="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="5"
                placeholder="¿Qué estás pensando?"
              ></textarea>
            </div>
            
            <!-- Botón para publicar -->
            <button 
              @click="createPost"
              :disabled="isUploading"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <span v-if="isUploading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publicando...
              </span>
              <span v-else>Publicar</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Separador -->
      <div class="flex items-center my-8">
        <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
        <span class="px-4 text-gray-500 dark:text-gray-400 font-medium">Publicaciones recientes</span>
        <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      
      <!-- Lista de posts -->
      <div v-if="posts.length > 0" class="space-y-8">
        <div 
          v-for="post in posts" 
          :key="post.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <!-- Cabecera del post -->
          <div class="p-4 flex items-center border-b dark:border-gray-700">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
              <span class="text-white font-bold">{{ post.uid.charAt(0).toUpperCase() }}</span>
            </div>
            <div>
              <p class="font-semibold dark:text-white">Usuario</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatDate(post.createdAt) }}
              </p>
            </div>
          </div>
          
          <!-- Imagen del post -->
          <div>
            <img 
              :src="post.img" 
              alt="Post image" 
              class="w-full object-cover"
              style="max-height: 600px;"
            >
          </div>
          
          <!-- Acciones del post -->
          <div class="p-4">
            <div class="flex space-x-4 mb-3">
              <button class="text-gray-500 hover:text-red-500 dark:text-gray-400 transition">
                <span class="text-2xl">❤️</span> <span class="ml-1">{{ post.likes?.length || 0 }}</span>
              </button>
              <button class="text-gray-500 hover:text-blue-500 dark:text-gray-400 transition">
                <span class="text-2xl">💬</span> <span class="ml-1">{{ post.comments?.length || 0 }}</span>
              </button>
            </div>
            
            <!-- Descripción del post -->
            <p class="dark:text-white text-sm">
              <span class="font-bold">Usuario</span> {{ post.description }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Mensaje cuando no hay posts -->
      <div v-else class="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No hay publicaciones disponibles</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-4">¡Sé el primero en compartir una imagen con tus amigos!</p>
        <p class="text-blue-500">Crea una publicación usando el formulario de arriba</p>
      </div>
    </div>
  </div>
</template>

