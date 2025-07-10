<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import DetailProduct from '@/components/DetailProduct.vue'
import { myMessages, shopByIconImages } from '@/constant/commom'
import ImageScroll from '@/components/ImageScroll.vue'

shopByIconImages
</script>


<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <DetailProduct />
    <ImageScroll :iconImages="shopByIconImages" title='You Might Also Like' />
    <Footer></Footer>
</template>