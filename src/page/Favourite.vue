<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFavorist from '@/components/ListFavorist.vue'
import { myMessages, shopByIconImages } from '@/constant/commom'

</script>

<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <ListFavorist />
    <ImageScroll :iconImages="shopByIconImages" title='Find Your Next Favorite'/>
    <Footer></Footer>
</template>