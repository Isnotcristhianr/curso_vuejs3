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
  name: 'about-view',
})

//? estados

//Estado para los post
const posts = ref<PostEntity[]>([])

//estado nuevo post
const newPost = ref<PostEntity>({
  uid: '', //usuario id
  active: true,
  createdAt: new Date(),
  img: '',
  description: '',
})

//estado para img selected
const selectedImg = ref('')
//estado archivo de img seleccionada
const selectedFile = ref<File | null>(null)
//estado de carga
const isLoading = ref(false)
//estado mensaje de error
const errorMessage = ref('')

//? funciones
onMounted(async () => {
  await loadPosts()
})

// cargar posts
const loadPosts = async () => {
  try {
    const postService = new PostService(new PostModel())
    posts.value = await postService.findAll()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

//selecion de archivo
const handleFileSelected = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]

    //validar si es img
    if (!file.type.startsWith('image/')) {
      errorMessage.value = 'El archivo debe ser una imagen'
      return
    }

    //validar size max 5mb
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'El archivo debe ser menor a 5MB'
      return
    }

    selectedFile.value = file
    errorMessage.value = ''

    //crear url para preview
    const reader = new FileReader()
    reader.onload = (i) => {
      selectedImg.value = i.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

//crear post
const createPost = async () => {
  try {
    if (!selectedFile.value || !newPost.value.description) {
      errorMessage.value = 'Todos los campos son requeridos'
      return
    }

    isLoading.value = true
    errorMessage.value = ''

    //subir img a storage
    const imgUrl = await UploadService.uploadImage(selectedFile.value)

    //crear post
    const postData: PostEntity = {
      uid: newPost.value.uid,
      active: newPost.value.active,
      createdAt: new Date(),
      img: imgUrl,
      description: newPost.value.description,
    }

    //crear post en db
    await CreatePublicationUseCase.execute(postData)

    //limpiar campos
    newPost.value = {
      uid: '',
      active: true,
      createdAt: new Date(),
      img: '',
      description: '',
    }
    selectedFile.value = null
    selectedImg.value = ''

    //actualizar lista de posts
    await loadPosts()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

//Formato fecha
const formatDate = (date: Date | Timestamp | DateTime | string) => {
  if (date instanceof Date) {
    return date.toLocaleDateString()
  }

  //timestamp
  if (date && typeof date === 'object' && 'toDate' in date) {
    return date.toDate().toLocaleDateString()

    //luxon
    if (date && typeof date === 'object' && 'toIso' in date) {
      //convertir datetime a string iso y luego date
      const isoDate = date.toIso()
      if (isoDate) {
        return new Date(isoDate).toLocaleDateString()
      }

      if ('toJSDate' in date && typeof date.toJSDate === 'function') {
        return date.toJSDate().toLocaleDateString()
      }

      //default
      return date.toString()
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <NavBar />

    <div class="container mx-auto px-4 py-8 max-w-4xl ">
      <!-- formulario de post -->
      <div class="bg-white dark:bg-base-100 rounded-lg shadow-md p-4 mb-8 text-primary">
        <div class="flex items-center font-bold text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Crear Post
        </div>

        <!-- Mensaje de error -->
        <p v-if="errorMessage" class="text-red-500 text-sm mt-2">
          {{ errorMessage }}
        </p>

        <!-- formulario -->
        <div class="md:flex md:space-x-4">
          <!-- IZQUIERDA -->
          <div class="md:w-1/2 mb-4">
            <!-- imagen -->
            <div
              v-if="!selectedFile"
              class="border-2 border-gray-300 dark:border-gray-500 rounded-lg p-10 text-center hover:bg-gray-50 dark:hover:bg-dark-700 transition cursor-pointer"
            >
              <label for="img-upload" class="block mb-2 font-medium"> Seleccione una imagen </label>
              <input type="file" id="img-upload" class="hidden" @change="handleFileSelected" />
              <label for="img-upload" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Haz Click para subir una imagen
                  <br />
                  <span class="text-sx"> PNG, JPG, GIF, max 5MB </span>
                </p>
              </label>
            </div>

            <!-- vista previa-->
            <div v-if="selectedFile" class="mt-4">
              <p class="mb-2 font-medium">Vista previa</p>
              <div class="rounded-lg overflow-hidden border dark:border-gray-700">
                <img
                  :src="selectedImg"
                  alt="vista previa"
                  class="w-full object-cover"
                  style="max-height: 300px"
                />
              </div>
            </div>
          </div>

          <!-- DERECHA -->
          <div class="md:w-1/2">
            <!-- descripcion -->
            <div class="mb-4">
              <label for="desription" class="block mb-2 font-medium text-primary"
                >Descripcion</label
              >
              <textarea 
              name="description" 
              id="description"
              v-model="newPost.description"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600 dark:text-white
              dark:border-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent
              disabled:cursor-not-allowed disabled:opacity-50 transition"
              rows="4"
              placeholder="¿Qué estás pensando?..."
              ></textarea>
            </div>

            <!-- Publicar -->
             <button
             @click="createPost"
             :disabled="isLoading"
             class="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark
             disabled:opacity-50 disabled:cursor-not-allowed transition"
             >
              {{ isLoading ? 'Publicando...' : 'Publicar' }}
             </button>
          </div>
        </div>
      </div>

      <!-- separador -->
       <div class="flex items-center my-8">
         <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 rounded-full"></div>
         <span class="px-4 text-gray-500 dark:text-gray-400">Publicaciones</span>
        <div class="flex-grow h-px bg-gray-300 dark:bg-gray-700 rounded-full"></div>
       </div>

       <!-- lista de posts -->
        <div v-if="posts.length > 0" class="space-y-8">
          <div 
          v-for="post in posts"
          :key="post.id"
          class="bg-white dark:bg-base-100 rounded-lg shadow-md p-4"
          >
          <!-- cabecera -->
           <div class="p-4 flex items-center border-b dark:border-gray-700" >
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary flex items-center mr-3">
              <span class="text-white font-bold">{{  post.uid.charAt(0).toUpperCase }}</span>
            </div>
            <p class="font-semibold dark:text-white"> Usuario </p>
            <p class="text-xs text-gray-500 dark:text-gray-200">
              {{ formatDate(post.createdAt) }}
            </p>
           </div>
        </div>
        </div>
        <div v-else class="text-center text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
          <h3 class="text-lg font-medium">No hay publicaciones</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Sé el primero en publicar
          </p>
        </div>
    </div>
  </div>
</template>
