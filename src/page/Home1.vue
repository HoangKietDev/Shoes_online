<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import VideoCarousel from '@/components/Carousel.vue'
import FeaturedSection from '@/components/FeaturedSection.vue'
import TrendingSection from '@/components/TrendingSection.vue'
import LatestSection from '@/components/LastestSection.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import { shopByIconImages, shopBySportImages, videos } from '@/constant/commom'


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