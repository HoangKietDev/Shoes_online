<template>
    <div class="max-w-6xl mx-auto px-4 pt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">
            <!-- Product Images -->
            <div class="flex flex-row xl:col-span-7">
                <div class="flex flex-col gap-2 mr-4">
                    <img v-for="(img, idx) in product.images" :key="idx" :src="img"
                        class="w-16 h-16 object-cover rounded cursor-pointer border transition-all duration-200"
                        :class="img === mainImage ? 'border-black ring-2 ring-black' : 'border-gray-200'"
                        @mouseenter="mainImage = img" />
                </div>
                <div class="flex-1">
                    <img :src="mainImage" :alt="product.name"
                        class="w-full h-auto rounded-xl shadow mb-4 transition-all duration-200" />
                </div>
            </div>

            <!-- Product Info -->
            <div class="xl:col-span-5">
                <div>
                    <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
                    <p class="text-lg font-medium text-gray-500">{{ product.category }}</p>
                    <p class="text-lg font-semibold py-2">{{ product.price }}₫</p>
                    <p class="text-gray-600 mb-6">{{ product.description }}</p>
                    <div class="mb-4">
                        <span class="font-semibold">Selected Size:</span>
                        <div class="grid grid-cols-5 gap-2 mt-2">
                            <button v-for="size in product.sizes" :key="size"
                                class="px-4 py-2 rounded border border-gray-300 hover:bg-black hover:text-white transition"
                                :class="size === selectedSize ? 'bg-black text-white' : 'bg-white text-black'"
                                @click="selectedSize = size">
                                {{ size }}
                            </button>
                        </div>
                    </div>
                    <button
                        class="mt-6 w-full bg-black text-white py-3 rounded-4xl text-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
                        Add to Cart
                    </button>

                    <button
                        class="mt-6 w-full bg-white text-black py-3 rounded-4xl border border-gray-300 text-lg font-semibold hover:border-black transition cursor-pointer">
                        Add to Cart
                    </button>

                    <p class="text-lg font-medium text-gray-500 text-center py-4">{{ product.noti }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import image1 from '@/assets/images/shoe1.avif'
import image2 from '@/assets/images/shoe2.avif'
import image3 from '@/assets/images/shoe3.avif'

const product = ref({
    name: 'Nike Air Max 97',
    category: 'Men\'s Shoes',
    price: '$129.99',
    description: 'The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.',
    images: [
        image1,
        image2,
        image3
    ],
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15]
})

const mainImage = ref(product.value.images[0])
const selectedSize = ref(product.value.sizes[0])
</script>