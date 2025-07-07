<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToShoe = () => {
  router.push('/shoe')
}
</script>

<template>
  <div class="mx-6 md:mx-12 mt-16">
    <h1 class="text-2xl font-bold mb-4">Trending</h1>

    <!-- ✅ Click ảnh để chuyển sang /shoe -->
    <div class="cursor-pointer" @click="goToShoe">
      <img src="/src/assets/images/imageTrendIp.avif" alt="Mobile Image" class="block md:hidden w-full" />
      <img src="/src/assets/images/imageTrend.avif" alt="Desktop Image" class="hidden md:block w-full" />
    </div>

    <!-- ✅ Text + nút Shop chuyển sang /shoe -->
    <div class="py-8 text-left md:text-center my-4 h-[200px] pt-4">
      <p class="text-3xl md:text-7xl font-extrabold py-2">Elevate Your Look</p>
      <p class="text-base text-black">Be ready for anything with the season's newest styles.</p>
      <button
        @click="goToShoe"
        class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block cursor-pointer hover:bg-gray-800 transition duration-300"
      >
        Shop
      </button>
    </div>
  </div>
</template>

