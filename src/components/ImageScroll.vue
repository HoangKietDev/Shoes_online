<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  iconImages?: string[]
  sportImages?: { src: string; title: string; alt: string }[]
  title?: string
}>()

const scrollRef = ref<HTMLElement | null>(null)

const isSport = computed(() => !!props.sportImages && props.sportImages.length > 0)

const sportImages = computed(() => props.sportImages ?? [])
const iconImages = computed(() => props.iconImages ?? [])
const title = computed(() => props.title ?? '')

const scrollLeft = () => {
  const container = scrollRef.value
  if (!container) return
  const item = container.querySelector(isSport.value ? '.sport-image' : '.icon-image')
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || '0')
  container.scrollBy({
    left: -(item.clientWidth + gap),
    behavior: 'smooth',
  })
}

const scrollRight = () => {
  const container = scrollRef.value
  if (!container) return
  const item = container.querySelector(isSport.value ? '.sport-image' : '.icon-image')
  if (!item) return

  const style = getComputedStyle(container)
  const gap = parseInt(style.gap || '0')
  container.scrollBy({
    left: item.clientWidth + gap,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div :class="['mt-16 mx-6', title === 'Shop by Sport' ? 'md:mx-24' : 'md:mx-12']">
    <div class="flex justify-between items-center mb-4 ">
      <h1 class="text-2xl font-bold"> {{ title }}</h1>
      <div class="flex gap-2">
        <button @click="scrollLeft"
          class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
          <!-- icon left -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button @click="scrollRight"
          class="bg-[#f5f5f5] text-black p-2 rounded-full hover:bg-gray-300 text-xl shadow-md">
          <!-- icon right -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>

    <div ref="scrollRef"
      class="flex overflow-x-auto scrollbar-hide gap-3 snap-x snap-mandatory px-2 md:px-0 scroll-smooth">
      <template v-if="isSport">
        <div v-for="(img, idx) in sportImages" :key="idx"
          class="sport-image w-[80vw] md:w-3/10 flex-shrink-0 relative pb-8">
          <img :src="img.src" :alt="img.alt" class="rounded-xl w-full object-cover" />

          <router-link to="shoe" class="absolute bottom-20 left-15 mt-2 text-center text-base  px-4 py-2 text-black font-bold bg-white rounded-3xl border border-gray-300 hover:bg-gray-100 transition-colors">{{ img.title }}</router-link>
        </div>
      </template>
      <template v-else>
        <div v-for="(img, idx) in iconImages" :key="idx"
          class="icon-image w-[80vw] md:w-1/3 flex-shrink-0 relative pb-16">
          <router-link to="shoe">
            <img :src="img" alt="" class="w-full object-cover" />
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>
