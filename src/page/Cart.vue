<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import CartComponent from '@/components/CartComponent.vue'


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
    <CartComponent />
    <ImageScroll :iconImages="shopByIconImages" title='Find Your Next Favorite'/>
    <Footer></Footer>
</template>