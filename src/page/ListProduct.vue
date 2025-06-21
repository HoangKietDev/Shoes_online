<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFilterProduct from '@/components/ListFilterProduct.vue'

const myMessages = [
    {
        title: 'New Styles On Sale: Up To 40% Off',
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
    <ListFilterProduct />
    <Footer></Footer>
</template>