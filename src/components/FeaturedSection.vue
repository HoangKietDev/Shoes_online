<script setup lang="ts">
const featuredItems = [
  { src: '/src/assets/images/imageFeatured1.avif', title: 'Your One And Only Layer' },
  { src: '/src/assets/images/imageFeatured2.avif', title: 'Nike Killshot' },
  { src: '/src/assets/images/imageFeatured3.avif', title: 'Nike Sonic Fly' },
]
</script>

<template>
  <div class="mx-6 md:mx-24 mt-16">
    <h1 class="text-2xl font-bold mb-4">Featured</h1>
    <div class="md:grid md:grid-cols-3 gap-4 overflow-x-auto flex md:flex-none">
      <div v-for="(item, idx) in featuredItems" :key="idx" class="w-[80vw] md:w-auto flex-shrink-0">
        <img :src="item.src" :alt="item.title" class="w-full" />
        <h1 class="mt-2 font-semibold py-4 text-lg">{{ item.title }}</h1>
      </div>
    </div>
  </div>
</template>
