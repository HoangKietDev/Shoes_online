<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToShoe = () => {
  router.push('/shoe')
}
</script>

<template>
  <div class="mx-6 md:mx-24 mt-16">
    <h1 class="text-2xl font-bold mb-4">The Lastest</h1>
    <div class="flex w-full flex-col md:flex-row"  @click="goToShoe">
      <div class="md:w-1/2 overflow-hidden">
        <img src="/src/assets/images/imageVini.jpg" alt="Latest Image" class="w-full object-cover max-h-[440px]" />
      </div>
      <div class="w-full md:w-1/2 overflow-hidden hidden md:block">
        <video src="/src/assets/videos/1.mp4" autoplay muted loop playsinline class="w-full object-cover max-h-[440px]" />
      </div>
    </div>
    <div class="py-8 text-left md:text-center my-4 h-[200px] pt-4">
      <p class="font-semibold">Vini Jr</p>
      <p class="text-3xl md:text-7xl font-extrabold py-2">Vini Fly, Vini Voa</p>
      <p class="text-base text-black">Vini Jr.’s First Nike Player Edition Boot Is Built to Be Bold</p>
      <a href="shoe" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block cursor-pointer hover:bg-gray-800 transition duration-300">Shop</a>
    </div>
  </div>
</template>
