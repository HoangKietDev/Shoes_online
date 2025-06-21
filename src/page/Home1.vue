<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import VideoCarousel from '@/components/Carousel.vue'
import FeaturedSection from '@/components/FeaturedSection.vue'
import TrendingSection from '@/components/TrendingSection.vue'
import LatestSection from '@/components/LastestSection.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

const videos = ['/src/assets/videos/video1.mp4', '/src/assets/videos/video2.mp4', '/src/assets/videos/video3.mp4']
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
const shopBySportImages = [
    { src: '/src/assets/images/sport8.avif', title: 'Running', alt: 'Running' },
    { src: '/src/assets/images/sport7.avif', title: 'Football', alt: 'Football' },
    { src: '/src/assets/images/sport6.avif', title: 'Baseketball', alt: 'Baseketball' },
    { src: '/src/assets/images/sport5.avif', title: 'Training and Gym', alt: 'Gym' },
    { src: '/src/assets/images/sport1.avif', title: 'Dancing', alt: 'Dancing' },
    { src: '/src/assets/images/sport2.avif', title: 'Skateboarding', alt: 'Skateboarding' },
    { src: '/src/assets/images/sport3.avif', title: 'Yoga', alt: 'Yoga' },
    { src: '/src/assets/images/sport4.avif', title: 'Tennis', alt: 'Tennis' },  
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
    <VideoCarousel :videos="videos" />
    <FeaturedSection />
    <TrendingSection />
    <LatestSection />
    <ImageScroll :iconImages="shopByIconImages" title='Shop by Icons'/>
    <ImageScroll :sportImages="shopBySportImages" title='Shop by Sport'/>
    <Footer></Footer>
</template>