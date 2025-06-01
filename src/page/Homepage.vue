<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'

// Danh sách video
const videos: string[] = [video1, video2, video3]

// Danh sách thông điệp
const messages = [
  {
    title: 'Free Standard Delivery & 30-Day Free Returns',
    text: 'Shop All Our New Markdowns',
    link: 'Shop Now'
  },
  {
    title: 'Limited Time: Up to 50% Off Selected Styles',
    text: 'Browse Offers Now',
    link: 'Browse Offers'
  },
  {
    title: 'Join Us & Get 10% Off Your First Order',
    text: 'Sign Up Here',
    link: 'Sign Up'
  }
]
const currentMessageIndex = ref(0)

// Index hiện tại
const currentIndex = ref<number>(0)

// Chuyển video tiếp theo
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % videos.length
}

// Quay lại video trước
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length
}

// Auto chuyển video sau 20s
let intervalId: number | null = null
onMounted(() => {
  intervalId = setInterval(() => {
    next();
    // Cập nhật thông điệp
    currentMessageIndex.value = (currentMessageIndex.value + 1) % messages.length
  }, 20000)
})

onUnmounted(() => {
  if (intervalId !== null) clearInterval(intervalId)
})

</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>

    <div class="bg-[#f5f5f5] text-center py-3 overflow-hidden ">
      <!-- Hiển thị thông điệp -->
      <Transition enter-active-class="transition transform duration-200 ease-out"
        enter-from-class="translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition transform duration-200 ease-in" leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0" mode="out-in">
        <div :key="currentMessageIndex">
          <p class="text-base text-black">
            {{ messages[currentMessageIndex].title }}
          </p>
          <a href="#" class="text-xs font-bold text-black cursor-pointer underline">
            {{ messages[currentMessageIndex].text }}
          </a>
        </div>
      </Transition>
    </div>

    <div>
      <div class="relative overflow-hidden w-full max-w-screen mx-auto">
        <div class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <!-- Lặp qua mảng video -->
          <div v-for="(video, index) in videos" :key="index" class="w-full flex-shrink-0">
            <video :src="video" class="w-full h-auto object-cover" autoplay muted loop playsinline></video>
          </div>
        </div>

        <!-- Nút điều khiển -->
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
        <p class="text-3xl md:text-5xl font-extrabold py-2">SPORT</p>
        <p class="text-base text-black">For Every Move - Every Trail - Every Game</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop</a>
      </div>
    </div>

    <div class="mx-6 md:mx-24 mt-16">
      <h1 class="text-2xl font-bold mb-4">Featured</h1>
      <div class="md:grid md:grid-cols-3 gap-4 overflow-x-auto flex md:flex-none">
        <div class="w-[80vw] md:w-auto flex-shrink-0">
          <img src="/src/assets/images/imageFeatured1.avif" alt="image1" class="w-full" />
          <h1 class="mt-2 font-semibold py-4 text-lg">Your One And Only Layer</h1>
        </div>
        <div class="w-[80vw] md:w-auto flex-shrink-0">
          <img src="/src/assets/images/imageFeatured2.avif" alt="image2" class="w-full" />
          <h1 class="mt-2 font-semibold py-4 text-lg">Nike Killshot</h1>
        </div>
        <div class="w-[80vw] md:w-auto flex-shrink-0">
          <img src="/src/assets/images/imageFeatured3.avif" alt="image3" class="w-full" />
          <h1 class="mt-2 font-bold py-4 text-lg">Nike Sonic Fly</h1>
        </div>
      </div>
    </div>

    <div class="mx-6 md:mx-12 mt-16 ">
      <h1 class="text-2xl font-bold mb-4">Trending</h1>
      <div>
        <img src="/src/assets/images/imageTrendIp.avif" alt="Mobile Image" class="block md:hidden w-full" />
        <img src="/src/assets/images/imageTrend.avif" alt="Desktop Image" class="hidden md:block w-full" />
      </div>
      <div class="py-8 text-left md:text-center my-4 h-[200px] pt-4">
        <p class="text-3xl md:text-5xl font-extrabold py-2">Elevate Your Look</p>
        <p class="text-base text-black">Be ready for anything with the season's newest styles.</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop Sandals</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
video {
  max-height: 600px;
}
</style>