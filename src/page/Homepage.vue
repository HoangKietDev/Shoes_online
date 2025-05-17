<script setup lang="ts">
// TypeScript enabled
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'
Navbar
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  <header>
    <!-- <Navbar /> -->
    <div class="block text-red-50 bg-red-500">This should show at ≥640px</div>
  </header>
  <main></main>
</template>
