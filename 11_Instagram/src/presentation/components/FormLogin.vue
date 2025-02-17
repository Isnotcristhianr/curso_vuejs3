<script setup lang="ts">
import GoogleIcon from '../assets/img/Google_Icon.webp'
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const { authForm, resetAuthForm, LoginEmailandPassword, LoginGoogle } = useAuthStore()

//? login email and password
const Login = async () => {
  try {
    const user = await LoginEmailandPassword()
    console.log(user)
    if (user) {
      router.replace('/')
    }
  } catch (error) {
    console.error('Error de login:', error)
  }
}

//? login google
const LoginGoogleAction = async () => {
    try {
        const user = await LoginGoogle()
        console.log(user)
        if(user){
            router.replace('/')
        }
    } catch (error) {
        console.error('Error de login:', error)
    }
}

//reset
onMounted(() => {
  resetAuthForm()
})

defineOptions({
  name: 'form-login',
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="card w-96 bg-base-100 shadow-xl p-8 rounded-lg">
      <h1 class="text-4xl font-bold text-center mb-8">𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎</h1>
      <form class="space-y-4" @submit.prevent="Login">
        <input
          v-model="authForm.email"
          type="text"
          placeholder="Email"
          class="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="authForm.password"
          type="password"
          placeholder="Password"
          class="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="Login"
          type="submit"
          class="btn btn-primary w-full text-white bg-blue-500 hover:bg-blue-600"
        >
          Log in
        </button>

        <a href="#" class="text-sm text-blue-900 font-semibold hover:underline block text-center">
          Forgot password?
        </a>

        <div class="divider text-sm text-gray-500">OR</div>
        <!-- loggin google -->
        <button @click="LoginGoogleAction" class="btn btn-outline w-full">
          <img :src="GoogleIcon" alt="Google Icon" class="w-4 h-4 mr-2" />
          Log in with Google
        </button>
      </form>

      <div class="mt-8 text-center text-sm">
        <p class="text-gray-600">
          Don't have an account?
          <a href="#" class="text-blue-500 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>
