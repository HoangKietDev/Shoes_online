<template>
    <div class="max-w-6xl mx-auto px-4 pt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">
            <!-- Product Images -->
            <div class="flex flex-row xl:col-span-7">
                <div class="hidden md:flex flex-col gap-2 mr-4">
                    <img v-for="(img, idx) in product.images" :key="idx" :src="img"
                        class="w-16 h-16 object-cover rounded cursor-pointer border transition-all duration-200"
                        :class="img === mainImage ? 'border-black ring-2 ring-black' : 'border-gray-200'"
                        @mouseenter="mainImage = img" />
                </div>
                <div class="flex-1">
                    <img :src="mainImage" :alt="product.title"
                        class="w-full h-auto rounded-xl shadow mb-4 transition-all duration-200" />
                </div>
            </div>

            <!-- Product Info -->
            <div class="xl:col-span-5">
                <div>
                    <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
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
                    <button ref="addToBagBtn"
                        class="mt-6 w-full bg-black text-white py-3 rounded-4xl text-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
                        @click="addToBag(product, product.id)">
                        Add to Bag
                    </button>

                    <button v-if="isMobileFixed"
                        class="fixed left-0 bottom-0 z-40 w-full bg-black text-white py-5 rounded-none  text-lg font-semibold hover:bg-gray-800 transition md:hidden"
                        style="max-width:100vw" @click="addToBag(product, product.id)">
                        Add to Bag
                    </button>

                    <button @click="goToFavor"
                        class="flex justify-center gap-2 mt-6 w-full bg-white text-black py-3 rounded-4xl border border-gray-300 text-lg font-semibold hover:border-black transition cursor-pointer">
                        Favorite
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px"
                            height="24px" fill="none">
                            <title>Favourites</title>
                            <path stroke="currentColor" stroke-width="1.5"
                                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                            </path>
                        </svg>
                    </button>

                    <p class="text-lg font-medium text-gray-500 text-center py-4">{{ product.noti }}</p>
                </div>
            </div>
        </div>
        <!-- Popup notification -->
        <transition name="fade">
            <div v-if="showPopup"
                class="fixed top-6 right-6  z-50 bg-white border border-green-400 shadow-2xl rounded-xl px-6 py-4 flex items-center gap-4 animate-slide-in min-w-[340px] ring-2 ring-green-200">
                <!-- Icon check xanh -->
                <img :src="popupItem?.image" :alt="popupItem?.title" class="w-16 h-16 object-cover rounded-lg border" />
                <div class="flex flex-col flex-1 min-w-0">
                    <span class="text-base font-semibold text-green-700 mb-1 flex items-center gap-1">
                        Added to bag!
                    </span>
                    <span class="font-semibold truncate">{{ popupItem?.title }}</span>
                    <span class="text-gray-500 text-sm truncate">{{ popupItem?.category }}</span>
                    <span class="text-black font-bold mt-1">{{ popupItem?.price }}₫</span>
                </div>
                <button class="ml-2 bg-black text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                    @click="goToCart">Go to Cart</button>
                <button class="ml-2 text-gray-400 hover:text-gray-600" @click="showPopup = false">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PRODUCTS } from '@/constant/productlist'

const router = useRouter()

function goToFavor() {
    router.push('/favorite')
}

// Popup logic
const showPopup = ref(false)
const popupItem = ref<any>(null)
let popupTimeout: ReturnType<typeof setTimeout> | null = null
const addedIdxList = ref<number[]>([])

function addToBag(item: any, idx: number) {
    popupItem.value = item
    showPopup.value = true
    if (!addedIdxList.value.includes(idx)) {
        addedIdxList.value.push(idx)
    }
    if (popupTimeout) clearTimeout(popupTimeout)
    popupTimeout = setTimeout(() => {
        showPopup.value = false
    }, 2000)
}

function goToCart() {
    showPopup.value = false
    router.push('/cart')
}

const defaultProduct = ref({
    title: 'Nike Air Max 97',
    category: 'Men\'s Shoes',
    price: '$129.99',
    description: 'The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.',
    images: [
        new URL('../assets/images/shoeDetail/shoeDetail_2_image1.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image2.avif', import.meta.url).href,
        new URL('../assets/images/shoeDetail/shoeDetail_2_image3.avif', import.meta.url).href
    ],
    noti: 'This product is excluded from site promotions and discounts.',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15],
    id: 1
})

const route = useRoute()
const productId = route.params.id
const foundProduct = PRODUCTS.find(p => String(p.id) === String(productId))
const productData = foundProduct
    ? {
        ...foundProduct,
        images: (foundProduct.images && foundProduct.images.length > 0)
            ? foundProduct.images
            : defaultProduct.value.images
    }
    : defaultProduct.value

const product = ref(productData)

const mainImage = ref(product.value.images?.[0])
const selectedSize = ref(product.value.sizes?.[0])

const isMobileFixed = ref(false)
const addToBagBtn = ref<HTMLElement | null>(null)

function handleScroll() {
    if (!addToBagBtn.value) return
    const btnRect = addToBagBtn.value.getBoundingClientRect()
    // Only apply on mobile (md:hidden)
    if (window.innerWidth < 768) {
        // If button is NOT visible in viewport, fix it to bottom
        isMobileFixed.value = !(btnRect.top > 0 && btnRect.bottom < window.innerHeight)
    } else {
        isMobileFixed.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    setTimeout(handleScroll, 200) // ensure first check
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes slide-in {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-slide-in {
    animation: slide-in 0.3s ease-out forwards;
}
</style>