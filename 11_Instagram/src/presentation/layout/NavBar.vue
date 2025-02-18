<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
//stores
import { useAuthStore } from '../stores/auth.store'
import { useUserStore } from '../stores/user.store'

//router
const router = useRouter()
//stores
const userStore = useUserStore()
const authStore = useAuthStore()
//refs
const imageError = ref(false)
const imageLoaded = ref(false)

//computed
const user = computed(() => userStore.currentUser)

const logout = async () => {
  await authStore.Logout()
  router.push('/login')
}

const getUserName = computed(() => {
  return user.value?.displayName || 'Mi perfil'
})

const handleImageError = () => {
  imageError.value = true
  imageLoaded.value = true
}

const handleImageLoad = () => {
  imageLoaded.value = true
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Instagram</a>
    </div>
    <div class="flex-none gap-2" v-if="user">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div v-if="!imageLoaded">
            <div class="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div class="w-10 rounded-full" >
            <img
              v-if="user?.photoURL"
              :src="user?.photoURL"
              @error="handleImageError"
              @load="handleImageLoad"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              {{ getUserName }}
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="logout" class="cursor-pointer bg-red-500">Logout</a></li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="flex-none gap-2">
        <router-link to="/login" class="btn btn-primary">Login</router-link>
        <router-link to="/register" class="btn btn-secondary">Register</router-link>
      </div>
    </div>
  </div>
</template>
