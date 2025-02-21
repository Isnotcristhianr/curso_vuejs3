<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="container max-w-[935px] flex items-center justify-center">
            <div class="p-8 rounded-lg shadow-md w-[350px]">
                <h1 class="text-2xl font-bold text-center mb-8">Registro</h1>
                <!-- form -->
                <form @submit.prevent="handleRegister">
                    <div class="space-y-4">
                        <input type="text" v-model="authForm.email" placeholder="Email" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <input type="password" v-model="authForm.password" placeholder="Password" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <input type="password" v-model="authForm.confirmPassword" placeholder="Confirm Password" class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Registrar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const { authForm, Register } = useAuthStore()

const handleRegister = async () => {
    await Register()
    router.push('/login')
}
defineOptions({
    name: 'register-view',
})
</script>