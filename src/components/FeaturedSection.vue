<script setup lang="ts">
import { useRouter } from 'vue-router'
import imageFeatured1 from '@/assets/images/imageFeatured1.avif'
import imageFeatured2 from '@/assets/images/imageFeatured2.avif'
import imageFeatured3 from '@/assets/images/imageFeatured3.avif'

const router = useRouter()
const goToShoe = () => {
  router.push('/shoe')
}

const featuredItems = [
  { src: imageFeatured1, title: 'Your One And Only Layer' },
  { src: imageFeatured2, title: 'Nike Killshot' },
  { src: imageFeatured3, title: 'Nike Sonic Fly' },
]

</script>

<template>
  <div class="mx-6 md:mx-24 mt-16">
    <h1 class="text-2xl font-bold mb-4">Featured</h1>
    <div class="md:grid md:grid-cols-3 gap-4 overflow-x-auto flex md:flex-none">
      <div v-for="(item, idx) in featuredItems" :key="idx" class="w-[80vw] md:w-auto flex-shrink-0 cursor-pointer"
        @click="goToShoe">
        <img :src="item.src" :alt="item.title" class="w-full" />
        <h1 class="mt-2 font-semibold py-4 text-lg">{{ item.title }}</h1>
      </div>
    </div>
  </div>
</template>
