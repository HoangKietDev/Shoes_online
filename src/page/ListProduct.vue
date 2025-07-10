<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFilterProduct from '@/components/ListFilterProduct.vue'
import { myMessages, shopByIconImages } from '@/constant/commom'
import ImageScroll from '@/components/ImageScroll.vue'
</script>


<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <ListFilterProduct />
    <ImageScroll :iconImages="shopByIconImages" title='You Also Might Like'/>
    <Footer></Footer>
</template>