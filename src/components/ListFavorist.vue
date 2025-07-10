<template>
    <div class="mx-auto px-6 md:px-12 py-8">
        <h2 class="text-3xl font-bold mb-6">Your Favorites</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(item, idx) in favoristList" :key="idx"
                class="pb-4 transition flex flex-col cursor-pointer group">
                <div class="aspect-square overflow-hidden mb-3 relative">
                    <img :src="item.image" :alt="item.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        @click="goToDetail(item)" />
                    <!-- Heart icon in white circle -->
                    <div @click.stop="removeFromFavorist(idx)"
                        class="absolute top-6 right-6 bg-white rounded-full p-2 shadow flex items-center justify-center">
                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path
                                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                                stroke="#ef4444" stroke-width="1.5" fill="none" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-xl font-semibold mb-1">{{ item.title }}</h3>
                <p class="text-lg font-medium text-gray-500">{{ item.category }}</p>
                <div class="pt-8">
                    <span v-if="addedIdxList.includes(idx)"
                        class="w-fit text-green-700 px-6 py-2 rounded-4xl border border-green-400 text-lg font-semibold flex items-center gap-2 justify-center select-none"
                        @click.stop="addToBag(item, idx)">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#22c55e" />
                            <path d="M8 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Added
                    </span>
                    <span v-else
                        class="bg-white text-black px-6 py-2 rounded-4xl border border-gray-300 text-lg font-semibold hover:border-black transition cursor-pointer"
                        @click.stop="addToBag(item, idx)">Add To Bag</span>
                </div>
            </div>
        </div>
        <div v-if="favoristList.length === 0" class="text-center text-gray-400 mt-12 text-lg">
            No favorite products yet.
        </div>

        <hr class="mt-16 border-gray-300" />

        <!-- Popup notification -->
        <transition name="fade">
            <div v-if="showPopup"
                class="fixed top-6 right-6 z-50 bg-white border border-green-400 shadow-2xl rounded-xl px-6 py-4 flex items-center gap-4 animate-slide-in min-w-[340px] ring-2 ring-green-200">
                
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDetail(product: any) {
    router.push(`/detail/${product.id}`)
}

const favoristList = ref([
    {
        title: 'Nike Air Max 97',
        category: "Men's Shoes",
        price: '4,200,000',
        image: new URL('../assets/images/shoeList/shoe_detail_1.avif', import.meta.url).href,
        id: 1
    },
    {
        title: 'Nike Dunk Low',
        category: "Women's Shoes",
        price: '3,500,000',
        image: new URL('../assets/images/shoeList/shoe_detail_2.avif', import.meta.url).href,
        id: 2
    },
    {
        title: 'Nike Jordan 1',
        category: "Men's Shoes",
        price: '5,200,000',
        image: new URL('../assets/images/shoeList/shoe_detail_3.avif', import.meta.url).href,
        id: 3
    }
])

function removeFromFavorist(idx: number) {
    favoristList.value.splice(idx, 1)
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
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes slide-in {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 0.3s;
}
</style>