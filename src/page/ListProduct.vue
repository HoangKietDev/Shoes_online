<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import ListFilterProduct from '@/components/ListFilterProduct.vue'
import { myMessages } from '@/constant/commom'
</script>


<template>
    <Navbar />
    <MessageBanner :messages="myMessages" />
    <ListFilterProduct />
    <Footer></Footer>
</template>