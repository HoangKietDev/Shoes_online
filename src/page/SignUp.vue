<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-200">
      <div class="flex flex-col items-center mb-6">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#111827"/>
          <path d="M8 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h2 class="text-3xl font-extrabold mt-2 mb-1 text-gray-900">Sign Up</h2>
        <p class="text-gray-500 text-sm">Create your account to get started.</p>
      </div>
      <form @submit.prevent="handleSignUp" class="space-y-5">
        <div>
          <label for="email" class="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            autocomplete="username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-700 mb-1 font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            autocomplete="new-password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 transition"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label for="confirmPassword" class="block text-gray-700 mb-1 font-medium">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            required
            autocomplete="new-password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 transition"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition text-lg shadow"
        >
          Sign Up
        </button>
      </form>
      <div class="flex justify-center items-center mt-6 text-sm">
        <span class="text-gray-500 mr-1">Already have an account?</span>
        <a href="/signin" class="text-black font-semibold hover:underline">Sign In</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleSignUp() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  alert(`Email: ${email.value}\nPassword: ${password.value}`)
  router.push('/')
}
</script>