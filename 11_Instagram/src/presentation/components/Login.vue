<script setup lang="ts">
import FormLogin from '../components/FormLogin.vue'
import screenLogin from '../assets/img/screenLogin.png'
import screenLogin2 from '../assets/img/screenLogin2.png'

defineOptions({
    name: 'login-component'
})
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="container max-w-[935px] flex items-center justify-center">
            <!-- Sección de teléfonos - Se oculta en móviles -->
            <div class="hidden md:block relative mr-8">
                <img :src="screenLogin" alt="Instagram App" class="w-[468px]" />
                <img 
                    :src="screenLogin2" 
                    alt="Instagram App Screenshot" 
                    class="absolute top-0 right-[60px] w-[250px] animate-fade-in"
                />
            </div>
            
            <!-- Formulario de login -->
            <FormLogin />
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>