<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-200">
            <a href="/" class="text-gray-500 hover:text-black transition decoration-solid text-decoration-line: underline">Back to Home</a>
            <div class="flex flex-col items-center mb-6">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#111827" />
                    <path d="M8 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-extrabold mt-2 mb-1 text-gray-900">Sign In</h2>
                <p class="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
            </div>
            <form @submit.prevent="handleLogin" class="space-y-5">
                <div>
                    <label for="email" class="block text-gray-700 mb-1 font-medium">Email</label>
                    <input v-model="email" type="email" id="email" required autocomplete="username"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 transition"
                        placeholder="you@example.com" />
                </div>
                <div>
                    <label for="password" class="block text-gray-700 mb-1 font-medium">Password</label>
                    <input v-model="password" type="password" id="password" required autocomplete="current-password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 transition"
                        placeholder="••••••••" />
                </div>
                <button type="submit"
                    class="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition text-lg shadow">
                    Sign In
                </button>
            </form>
            <div class="flex justify-between items-center mt-6 text-sm">
                <a href="#" class="text-gray-500 hover:text-black transition">Forgot password?</a>
                <a href="/signup" class="text-black font-semibold hover:underline">Sign Up</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
    // Xử lý đăng nhập ở đây
    alert(`Email: ${email.value}\nPassword: ${password.value}`)
    router.push('/')
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 0.75rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #333;
}
</style>