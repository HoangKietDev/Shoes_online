<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import Footer from '@/components/Footer.vue'

// Danh sách video
const videos: string[] = [video1, video2, video3]
// Dach sách images
const images: string[] = [
  '/src/assets/images/shoe1.avif',
  '/src/assets/images/shoe2.avif',
  '/src/assets/images/shoe3.avif',
  '/src/assets/images/shoe4.avif',
  '/src/assets/images/shoe5.avif',
  '/src/assets/images/shoe6.avif',
  '/src/assets/images/shoe7.avif',
  '/src/assets/images/shoe8.avif',
  '/src/assets/images/shoe9.avif',
  '/src/assets/images/shoe10.avif',
]

const imagesSport = [
  {
    src: '/src/assets/images/sport6.avif',
    title: 'Baseketball',
    alt: 'Baseketball Sport Image'
  },
  {
    src: '/src/assets/images/sport7.avif',
    title: 'Football',
    alt: 'Football Sport Image'
  },
  {
    src: '/src/assets/images/sport8.avif',
    title: 'Running',
    alt: 'Running Sport Image'
  },
  {
    src: '/src/assets/images/sport1.avif',
    title: 'Dance',
    alt: 'Dance Sport Image'
  },
  {
    src: '/src/assets/images/sport2.avif',
    title: 'Skateboarding',
    alt: 'Skateboarding Sport Image'
  },
  {
    src: '/src/assets/images/sport3.avif',
    title: 'Yoga',
    alt: 'Yoga Sport Image'
  },
  {
    src: '/src/assets/images/sport4.avif',
    title: 'Tennis',
    alt: 'Tennis Sport Image'
  }, {
    src: '/src/assets/images/sport5.avif',
    title: 'Training and Gym',
    alt: 'Training and Gym Image'
  }

]



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

const iconScrollRef = ref<HTMLElement | null>(null)

const scrollIconsLeft = () => {
  const container = iconScrollRef.value
  if (!container) return
  const item = container.querySelector(".icon-image")
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || "0")
  container.scrollBy({
    left: -(item.clientWidth + gap),
    behavior: "smooth"
  })
}

const scrollIconsRight = () => {
  const container = iconScrollRef.value
  if (!container) return
  const item = container.querySelector(".icon-image")
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || "0")
  container.scrollBy({
    left: item.clientWidth + gap,
    behavior: "smooth"
  })
}

const SportScrollRef = ref<HTMLElement | null>(null)

const scrollIconsLeftSport = () => {
  const container = SportScrollRef.value
  if (!container) return
  const item = container.querySelector(".sport-image")
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || "0")
  container.scrollBy({
    left: -(item.clientWidth + gap),
    behavior: "smooth"
  })
}

const scrollIconsRightSport = () => {
  const container = SportScrollRef.value
  if (!container) return
  const item = container.querySelector(".sport-image")
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || "0")
  container.scrollBy({
    left: item.clientWidth + gap,
    behavior: "smooth"
  })
}

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

    <!-- carousel part  -->
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
        <p class="text-3xl md:text-7xl font-extrabold py-2">SPORT</p>
        <p class="text-base text-black">For Every Move - Every Trail - Every Game</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop</a>
      </div>
    </div>

    <!-- Featured Part -->
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

    <!-- Trending Part -->
    <div class="mx-6 md:mx-12 mt-16">
      <h1 class="text-2xl font-bold mb-4">Trending</h1>
      <div>
        <img src="/src/assets/images/imageTrendIp.avif" alt="Mobile Image" class="block md:hidden w-full" />
        <img src="/src/assets/images/imageTrend.avif" alt="Desktop Image" class="hidden md:block w-full" />
      </div>
      <div class="py-8 text-left md:text-center my-4 h-[200px] pt-4">
        <p class="text-3xl md:text-7xl font-extrabold py-2">Elevate Your Look</p>
        <p class="text-base text-black">Be ready for anything with the season's newest styles.</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop</a>
      </div>
    </div>

    <!-- The Latest Part -->
    <div class="mx-6 md:mx-24 mt-16">
      <h1 class="text-2xl font-bold mb-4">The Latest</h1>
      <div class="flex w-full flex-col md:flex-row">
        <!-- Hình ảnh -->
        <div class="md:w-1/2 overflow-hidden">
          <img src="/src/assets/images/imageVini.jpg" alt="Latest Image"
            class="w-full h-full object-cover" />
        </div>
        <!-- Video  -->
        <div class="w-full md:w-1/2 overflow-hidden hidden md:block">
          <video src="/src/assets/videos/1.mp4" autoplay muted loop playsinline class="w-full h-full object-cover">
          </video>
        </div>
      </div>
      <div class="py-8 text-left md:text-center my-4 h-[200px] pt-4">
        <p class="font-semibold">Vini Jr</p>
        <p class="text-3xl md:text-7xl font-extrabold py-2">Vini Fly, Vini Voa</p>
        <p class="text-base text-black">Vini Jr.’s First Nike Player Edition Boot Is Built to Be Bold</p>
        <a href="" class="px-6 py-2 mt-4 text-white font-medium bg-black rounded-3xl inline-block">Shop</a>
      </div>
    </div>

    <!-- Shop By Icon Part -->
    <div class="mx-6 md:mx-12 mt-16">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Shop By Icons</h1>
        <div class="flex gap-2">
          <!-- Nút scroll trái -->
          <button @click="scrollIconsLeft"
            class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <!-- Nút scroll phải -->
          <button @click="scrollIconsRight"
            class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Container scroll -->
      <div ref="iconScrollRef" class="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-16">
        <img v-for="(imgSrc, index) in images" :key="index" :src="imgSrc" alt="Shop Icon"
          class="icon-image w-[80vw] md:w-1/3 flex-shrink-0 object-contain " />
      </div>
    </div>


    <!-- Shop By Sport Part -->
    <div class="mx-6 md:mx-24 mt-16 mb-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Shop By Sport</h1>
        <div class="flex gap-2">
          <!-- Nút scroll trái -->
          <button @click="scrollIconsLeftSport"
            class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <!-- Nút scroll phải -->
          <button @click="scrollIconsRightSport"
            class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Container scroll -->
      <div ref="SportScrollRef" class="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-8">
        <div v-for="(item, index) in imagesSport" :key="index" class="w-[80vw] md:w-1/3 flex-shrink-0 relative">
          <img :src="item.src" alt="Shop Sport" class="sport-image object-contain w-full " />
          <a :href="item?.alt"
            class="absolute bottom-10 left-10 mt-2 text-center text-base  px-4 py-2 text-black font-bold bg-white rounded-3xl border border-gray-300 hover:bg-gray-100 transition-colors">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <footer>
        <Footer />
    </footer>
  
  </main>
</template>

<style scoped>
video {
  max-height: 580px;
}
</style>