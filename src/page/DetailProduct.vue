<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import DetailProduct from '@/components/DetailProduct.vue'
import { myMessages } from '@/constant/commom'

</script>


<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <DetailProduct />
    <Footer></Footer>
</template>