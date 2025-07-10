<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFavorist from '@/components/ListFavorist.vue'
import { shopByIconImages } from '@/constant/commom'

const myMessages = [
    {
        title: 'Free Standard Delivery & 30-Day Free Returns',
        text: 'Shop All Our New Markdowns',
        link: 'Shop Now'
    },
    {
        title: 'Limited Time: Up to 50% Off Selected Styles',
        text: 'Browse Offers Now',
        link: 'Browse Offers'
    },
    {
        title: 'Join Us & Get 10% Off Your First Order',
        text: 'Sign Up Here',
        link: 'Sign Up'
    }
]
</script>

<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <ListFavorist />
    <ImageScroll :iconImages="shopByIconImages" title='Find Your Next Favorite'/>
    <Footer></Footer>
</template>