<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
//on mount
import { onMounted } from 'vue'
//current user
import { getCurrentUser } from 'vuefire'

const router = useRouter()

onMounted(async () => {
  const currentUser = await getCurrentUser();
  if(currentUser){
    router.push('/')
  }else{
    router.push('/login')
  }
})

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
