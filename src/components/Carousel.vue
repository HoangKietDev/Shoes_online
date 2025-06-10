<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  videos: string[]
}>()

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.videos.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.videos.length) % props.videos.length
}

let intervalId: number | null = null
onMounted(() => {
  intervalId = setInterval(() => {
    next()
  }, 20000)
})

onUnmounted(() => {
  if (intervalId !== null) clearInterval(intervalId)
})
</script>

<template>
  <div class="relative overflow-hidden w-full max-w-screen mx-auto">
    <div class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(video, index) in videos" :key="index" class="w-full flex-shrink-0">
        <video :src="video" class="w-full h-auto object-cover" autoplay muted loop playsinline></video>
      </div>
    </div>

    <div class="absolute right-10 bottom-5 items-center px-2 flex gap-2">
      <button @click="prev" class="bg-white/50 text-black p-2 rounded-full hover:bg-amber-50 text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button @click="next" class="bg-white/50 text-black p-2 rounded-full hover:bg-amber-50 text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
  <div class="w-full max-w-screen mx-auto text-left md:text-center my-4 h-[200px] pt-4 px-6">
        <p class="font-semibold">Gear Up: Sport - Active - Outdoor</p>
        <p class="text-3xl md:text-7xl font-extrabold py-2">SPORT</p>
        <p class="text-base text-black">For Every Move - Every Trail - Every Game</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop</a>
      </div>
</template>

<style scoped>
video {
  max-height: 580px;
}
</style>
