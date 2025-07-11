<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import VideoCarousel from '@/components/Carousel.vue'
import FeaturedSection from '@/components/FeaturedSection.vue'
import TrendingSection from '@/components/TrendingSection.vue'
import LatestSection from '@/components/LastestSection.vue'
import ImageScroll from '@/components/ImageScroll.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import { myMessages, shopByIconImages, shopBySportImages, videos } from '@/constant/commom'

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