<template>
  <div class="mx-auto px-6 md:px-12 py-8 md:w-3/4 lg:w-2/3">
    <!-- Popup success -->
    <transition name="fade">
      <div
        v-if="showSuccess"
        class="fixed top-6 right-6 z-50 bg-white border border-green-400 shadow-2xl rounded-xl px-6 py-4 flex items-center gap-4 animate-slide-in min-w-[320px] ring-2 ring-green-200"
      >
        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 border border-green-300">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#22c55e" fill-opacity="0.15"/>
            <path d="M8 12l2 2 4-4" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex flex-col flex-1 min-w-0">
          <span class="text-base font-semibold text-green-700 mb-1 flex items-center gap-1">
            Order placed successfully!
          </span>
          <span class="text-gray-500 text-sm">Thank you for your purchase.</span>
        </div>
        <button class="ml-2 text-gray-400 hover:text-gray-600" @click="showSuccess = false">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition>
    <!-- ...existing checkout UI... -->
    <div class="">
      <h2 class="text-3xl font-bold mb-8 text-center">Checkout</h2>
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Shipping Info -->
        <div>
          <h3 class="text-3xl font-semibold mb-4">Shipping Information</h3>
          <form class="space-y-4" @submit.prevent="placeOrder">
            <div>
              <label class="block text-gray-700 mb-1 font-medium">Full Name</label>
              <input
                type="text"
                v-model="shipping.name"
                :class="inputClass(errors.name)"
                @blur="validateField('name')"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                v-model="shipping.phone"
                :class="inputClass(errors.phone)"
                @blur="validateField('phone')"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1 font-medium">Address</label>
              <input
                type="text"
                v-model="shipping.address"
                :class="inputClass(errors.address)"
                @blur="validateField('address')"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1 font-medium">City</label>
              <input
                type="text"
                v-model="shipping.city"
                :class="inputClass(errors.city)"
                @blur="validateField('city')"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1 font-medium">Note (optional)</label>
              <textarea
                v-model="shipping.note"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
              ></textarea>
            </div>
          </form>
        </div>
        <!-- Order Summary -->
        <div>
          <h3 class="text-3xl font-semibold mb-4">Order Summary</h3>
          <div class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-4">
            <div v-for="item in cartItems" :key="item.id" class="flex items-center gap-4 mb-4">
              <img :src="item.image" :alt="item.title" class="w-16 h-16 object-cover rounded-lg border" />
              <div class="flex-1">
                <div class="font-semibold">{{ item.title }}</div>
                <div class="text-gray-500 text-sm">{{ item.category }}</div>
                <div class="text-gray-500 text-sm">x{{ item.qty }}</div>
              </div>
              <div class="font-bold text-black">{{ (item.price * item.qty).toLocaleString() }}₫</div>
            </div>
            <hr />
            <div class="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>{{ totalPrice }}₫</span>
            </div>
            <div class="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div class="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>{{ totalPrice }}₫</span>
            </div>
            <button
              class="mt-4 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition text-lg shadow"
              @click="placeOrder"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showSuccess = ref(false)

const shipping = ref({
  name: '',
  phone: '',
  address: '',
  city: '',
  note: ''
})

const errors = ref({
  name: false,
  phone: false,
  address: false,
  city: false
})

function inputClass(error: boolean) {
  return error
    ? 'border-red-500 focus:ring-red-500'
    : ''
}

function validateField(field: keyof typeof errors.value) {
  errors.value[field] = !shipping.value[field].trim()
}

function validateAll() {
  let valid = true
  for (const key of Object.keys(errors.value) as Array<keyof typeof errors.value>) {
    if (!shipping.value[key].trim()) {
      errors.value[key] = true
      valid = false
    } else {
      errors.value[key] = false
    }
  }
  return valid
}

const cartItems = ref([
  {
    id: 1,
    title: 'Nike Air Max 97',
    category: "Men's Shoes",
    price: 4200000,
    image: new URL('../assets/images/shoeList/shoe_detail_1.avif', import.meta.url).href,
    qty: 1
  },
  {
    id: 2,
    title: 'Nike Dunk Low',
    category: "Women's Shoes",
    price: 3500000,
    image: new URL('../assets/images/shoeList/shoe_detail_2.avif', import.meta.url).href,
    qty: 2
  }
])

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0).toLocaleString()
)

function placeOrder(e: Event) {
  e.preventDefault()
  if (!validateAll()) {
    return
  }
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
    router.push('/')
  }, 1500)
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