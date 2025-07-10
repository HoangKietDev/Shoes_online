<template>
    <div class="mx-auto px-6 md:px-12 py-8 md:w-3/4 lg:w-2/3">
        <div class="">
            <h2 class="text-3xl font-bold mb-8 text-center">Your Bag</h2>
            <div v-if="cartItems.length > 0" class="grid md:grid-cols-3 gap-8">
                <div class="md:col-span-2">
                    <div v-for="(item, idx) in cartItems" :key="item.id"
                        class="flex items-center gap-6 mb-8 border-b pb-6 last:border-b-0 last:pb-0">
                        <img :src="item.image" :alt="item.title" class="w-28 h-28 object-cover rounded-xl border" />
                        <div class="flex-1">
                            <h3 class="text-2xl font-semibold mb-1">{{ item.title }}</h3>
                            <p class="text-gray-500 text-base mb-2">{{ item.category }}</p>
                            <p class="text-gray-500 text-base mb-2"> Size: {{ item.size }}</p>
                            <div class="flex items-center gap-4 mt-2">
                                <span class="text-lg font-bold text-black">{{ item.price }} $</span>
                                <div class="flex items-center gap-2">
                                    <button
                                        v-if="item.qty > 1"
                                        @click="decreaseQty(idx)"
                                        class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
                                    >-</button>
                                    <button
                                        v-else
                                        @click="removeItem(idx)"
                                        class="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-200 flex items-center justify-center text-xl font-bold text-red-500"
                                        title="Remove"
                                    >
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <span class="px-2">{{ item.qty }}</span>
                                    <button
                                        @click="increaseQty(idx)"
                                        class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold"
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="bg-gray-50 rounded-xl p-6 h-fit shadow flex flex-col gap-4">
                        <h4 class="text-3xl font-bold mb-2">Order Summary</h4>
                        <div class="flex justify-between text-lg">
                            <span>Subtotal</span>
                            <span>{{ totalPrice }} $</span>
                        </div>
                        <div class="flex justify-between text-gray-500">
                            <span>Estimated Shipping & Handling</span>
                            <span>Free</span>
                        </div>
                        <div class="flex justify-between text-gray-500">
                            <span>Estimated Tax</span>
                            <span>--</span>
                        </div>
                        <hr />
                        <div class="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>{{ totalPrice }} $</span>
                        </div>
                        <!-- Nút checkout bình thường -->
                        <button
                            ref="checkoutBtn"
                            class="mt-4 w-full bg-black text-white py-3 rounded-4xl font-semibold hover:bg-gray-800 transition text-lg shadow"
                            @click="checkout"
                        >
                            Checkout
                        </button>

                        <!-- Nút checkout cố định dưới mobile -->
                        <button
                            v-if="checkoutFixed"
                            class="fixed left-0 bottom-0 z-40 w-full bg-black text-white py-5 rounded-none text-lg font-semibold hover:bg-gray-800 transition md:hidden"
                            style="max-width:100vw"
                            @click="checkout"
                        >
                            Checkout
                        </button>
                    </div>

                    <p class="text-gray-500 text-sm mt-4">By selecting one of the above payment options, you confirm that you have read, understand, and agree to Nike’s Terms of Use, Terms of Sale and Return Policy, and acknowledge Nike’s Privacy Policy.</p>
                </div>

            </div>
            <div v-else class="text-center text-gray-400 text-xl py-24">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" class="mx-auto mb-4">
                    <circle cx="12" cy="12" r="12" fill="#f3f4f6" />
                    <path d="M8 12l2 2 4-4" stroke="#d1d5db" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                Your cart is empty.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const cartItems = ref([
    {
        id: 1,
        title: 'Nike Air Max 97',
        category: "Men's Shoes",
        size: "15",
        price: 199,
        image: new URL('../assets/images/shoeList/shoe_detail_1.avif', import.meta.url).href,
        qty: 1
    },
    {
        id: 2,
        title: 'Nike Air VaporMax Plus',
        category: "Women's Shoes",
        price: 249,
        size: "16",
        image: new URL('../assets/images/shoeList/shoe_detail_2.avif', import.meta.url).href,
        qty: 2
    },
    {
        id: 3,
        title: 'Nike Dunk Low Retro ',
        category: "Women's Shoes",
        price: 129,
        size: "15",
        image: new URL('../assets/images/shoeList/shoe_detail_3.avif', import.meta.url).href,
        qty: 3
    }
])

const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0).toLocaleString()
)

function increaseQty(idx: number) {
    cartItems.value[idx].qty++
}
function decreaseQty(idx: number) {
    if (cartItems.value[idx].qty > 1) cartItems.value[idx].qty--
}
function removeItem(idx: number) {
    cartItems.value.splice(idx, 1)
}
function checkout() {
    router.push('/checkout')
}

const checkoutFixed = ref(false)
const checkoutBtn = ref<HTMLElement | null>(null)

function handleCheckoutScroll() {
    if (!checkoutBtn.value) return
    const btnRect = checkoutBtn.value.getBoundingClientRect()
    if (window.innerWidth < 768) {
        checkoutFixed.value = !(btnRect.top > 0 && btnRect.bottom < window.innerHeight)
    } else {
        checkoutFixed.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleCheckoutScroll)
    window.addEventListener('resize', handleCheckoutScroll)
    setTimeout(handleCheckoutScroll, 200)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleCheckoutScroll)
    window.removeEventListener('resize', handleCheckoutScroll)
})
</script>