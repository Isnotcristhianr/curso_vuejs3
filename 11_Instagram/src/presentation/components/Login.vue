<script setup lang="ts">
import FormLogin from '../components/FormLogin.vue'
import screenLogin from '../assets/img/loginPreview.png'

defineOptions({
    name: 'login-component'
})
</script>

<template>
    <div class="min-h-screen bg-gray-50  justify-center p-4">
        <div class="container max-w-[935px] flex items-center justify-center">
            <!-- Sección de teléfonos - Se oculta en móviles -->
            <div class="hidden md:block relative mr-8">
                <img :src="screenLogin" alt="Instagram App" class="w-[500px]" />

            </div>
            
            <!-- Formulario de login -->
            <FormLogin />

        </div>
        <!-- Footer -->
        <div class="flex justify-center items-center">
            <div class="text-black">
                <ul class="flex flex-row gap-4 text-sm">
                    <li>
                        Meta
                    </li>
                    <li>
                        Informacion
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Empleo
                    </li>
                    <li>
                        Ayuda
                    </li>
                    <li>
                        API
                    </li>
                    <li>
                        Privacidad
                    </li>
                    <li>
                        Condiciones
                    </li>
                    <li>
                        Ubicaciones
                    </li>
            
                </ul>
                <div>
                    <p class="text-sm text-gray-500 text-center">© 2025 Instagram from Meta</p>
                </div>
            </div>
        </div>
    </div>
</template>
