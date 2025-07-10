<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFilterProduct from '@/components/ListFilterProduct.vue'
import { myMessages } from '@/constant/commom'
import ImageScroll from '@/components/ImageScroll.vue'
const shopByIconImages = [
    '/src/assets/images/shoe1.avif',
    '/src/assets/images/shoe2.avif',
    '/src/assets/images/shoe3.avif',
    '/src/assets/images/shoe4.avif',
    '/src/assets/images/shoe5.avif',
    '/src/assets/images/shoe6.avif',
    '/src/assets/images/shoe7.avif',
    '/src/assets/images/shoe8.avif',
    '/src/assets/images/shoe9.avif',
    '/src/assets/images/shoe10.avif',
]
</script>


<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <ListFilterProduct />
    <ImageScroll :iconImages="shopByIconImages" title='You Also Might Like'/>
    <Footer></Footer>
</template>