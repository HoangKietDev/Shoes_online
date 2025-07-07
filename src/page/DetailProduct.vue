<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div>
        <img :src="product.image" :alt="product.name" class="w-full rounded-xl shadow" />
        <!-- Thumbnails (nếu có) -->
        <div class="flex gap-2 mt-4">
          <img
            v-for="(img, idx) in product.images"
            :key="idx"
            :src="img"
            class="w-16 h-16 object-cover rounded cursor-pointer border"
            :class="img === product.image ? 'border-black' : 'border-gray-200'"
            @click="product.image = img"
          />
        </div>
      </div>
      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
        <p class="text-xl text-gray-700 mb-4">{{ product.price }}₫</p>
        <p class="text-gray-600 mb-6">{{ product.description }}</p>
        <div class="mb-4">
          <span class="font-semibold">Size:</span>
          <div class="flex gap-2 mt-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              class="px-4 py-2 rounded border border-gray-300 hover:bg-black hover:text-white transition"
              :class="size === selectedSize ? 'bg-black text-white' : 'bg-white text-black'"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>
        <button
          class="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const product = ref({
  name: 'Nike Air Max 97',
  price: '4,200,000',
  description: 'The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.',
  image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e8b7e5e-2e7e-4c7e-8c2e-7e5e8b7e5e8b/air-max-97-shoes.png',
  images: [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e8b7e5e-2e7e-4c7e-8c2e-7e5e8b7e5e8b/air-max-97-shoes.png',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e5e8b7e5e8b-6e8b7e5e-2e7e-4c7e-8c2e/air-max-97-shoes-2.png'
  ],
  sizes: [38, 39, 40, 41, 42, 43]
})

const selectedSize = ref(product.value.sizes[0])
</script>