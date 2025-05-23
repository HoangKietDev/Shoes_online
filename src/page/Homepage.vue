<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'

const videos: string[] = [video1, video2]

const currentIndex = ref<number>(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length
}

// Optional: auto slide
let intervalId: number | null = null
onMounted(() => {
  intervalId = window.setInterval(next, 20000)
})

onUnmounted(() => {
  if (intervalId !== null) clearInterval(intervalId)
})
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  <header>
    <Navbar />
  </header>
  <main>
    <div class="relative overflow-hidden w-full max-w-screen mx-auto">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(video, index) in videos" :key="index" class="w-full flex-shrink-0">
          <video
            :src="video"
            class="w-full h-auto object-cover"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="absolute right-10 bottom-5 items-center px-2 flex gap-2">
        <button @click="" class="bg-white/50 text-black p-2 rounded-full hover:bg-amber-50 text-sm">
          {{ true ? '▶️' : '⏸' }}
        </button>
        <button
          @click="prev"
          class="bg-white/50 text-black p-2 rounded-full hover:bg-amber-50 text-xl"
        >
          &lt;
        </button>
        <button
          @click="next"
          class="bg-white/50 text-black p-2 rounded-full hover:bg-amber-50 text-xl"
        >
          &gt;
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
video {
  max-height: 600px;
}
</style>
