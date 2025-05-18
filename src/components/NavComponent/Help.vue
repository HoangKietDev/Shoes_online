<script setup lang="ts">
interface HelpLink {
  text: string
  href: string
}

const helpLinks: HelpLink[] = [
  { text: 'Order Status', href: '' },
  { text: 'Dispatch and Delivery', href: '' },
  { text: 'Returns', href: '' },
  { text: 'Contact Us', href: '' },
  { text: 'Privacy Policy', href: '' },
  { text: 'Terms of Sale', href: '' },
  { text: 'Terms of Use', href: '' },
  { text: 'Send Us Feedback', href: '' },
]
</script>
<template>
  <div class="relative">
    <div class="absolute bg-white rounded-xl w-[240px] h-[280px] shadow-md">
      <div class="flex justify-start items-center h-full pl-4">
        <ul class="flex space-x-20">
          <li>
            <span class="mb-2 inline-block text-lg font-semibold">Help</span>
            <p
              v-for="(link, index) in helpLinks"
              :key="index"
              class="text-sm font-semibold text-black/60 hover:text-black/100 mb-1"
            >
              <a :href="link.href">{{ link.text }}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
