<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Message {
  title: string
  text: string
  link: string
}

const props = defineProps<{
  messages: Message[]
  interval?: number
}>()

const currentMessageIndex = ref(0)
let intervalId: number | null = null

const switchInterval = props.interval ?? 20000

onMounted(() => {
  intervalId = setInterval(() => {
    currentMessageIndex.value = (currentMessageIndex.value + 1) % props.messages.length
  }, switchInterval)
})

onUnmounted(() => {
  if (intervalId !== null) clearInterval(intervalId)
})
</script>

<template>
  <div class="bg-[#f5f5f5] text-center py-2 overflow-hidden border-solid border-1 border-gray-200">
    <Transition
      enter-active-class="transition transform duration-200 ease-out"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition transform duration-200 ease-in"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
      mode="out-in"
    >
      <div :key="currentMessageIndex">
        <p class="text-base text-black">
          {{ props.messages[currentMessageIndex].title }}
        </p>
        <a :href="props.messages[currentMessageIndex].link" class="text-xs font-bold text-black cursor-pointer underline">
          {{ props.messages[currentMessageIndex]?.text }}
        </a>
      </div>
    </Transition>
  </div>
</template>
