<script setup lang="ts">
import { CATEGORIES, COLORSLIST, PRODUCTS, SORTOPTIONS, SIZELIST } from '@/constant/productlist';
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const isScrolled = ref(false)
const showFilter = ref(true)
const showMobileFilter = ref(false)
const dropdownStates = reactive({
    sale: false,
    gender: false,
    height: false,
    price: false,
    width: false,
    type: false,
    color: false,
    size: false,
    sort: false,
})

const router = useRouter()

function goToDetail(product: any) {
    router.push(`/detail/${product.id}`)
}

const toggleDropdown = (key: keyof typeof dropdownStates) => {
    dropdownStates[key] = !dropdownStates[key]
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})



</script>

<template>
    <div class="mx-0 md:mx-12">
        <div class="px-4 md:px-0 flex justify-between items-center py-3 my-3 sticky top-0 bg-white z-10">
            <div class="font-medium transition-all duration-300 ease-in-out" :class="[
                isScrolled ? 'text-2xl' : 'text-3xl',
            ]">
                All Shoes (300)
            </div>
            <div class="flex justify-between items-center">
                <div class="hidden px-8 md:flex items-center cursor-pointer" @click="showFilter = !showFilter">
                    <div class="text-xl px-2 font-medium"> {{ showFilter ? 'Hide Filter' : 'Show Filter' }}</div>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
                                fill="#000000"></path>
                        </g>
                    </svg>
                </div>
                <div @click="showMobileFilter = true"
                    class=" flex md:hidden items-center px-4 py-2 text-black text-lg font-medium bg-white rounded-4xl border border-[rgba(0,0,0,0.2)] cursor-pointer">
                    <p>Filter</p>
                    <div class="mx-2 ">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div class="hidden md:block">
                    <div class="flex items-center relative">
                        <div class="text-xl px-2 font-medium cursor-pointer"
                            @click="dropdownStates.sort = !dropdownStates.sort">
                            Sort By
                        </div>
                        <div @click="dropdownStates.sort = !dropdownStates.sort" class="cursor-pointer">
                            <svg v-if="!dropdownStates.sort" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                        <!-- Dropdown sort -->
                        <div v-if="dropdownStates.sort"
                            class="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                            <ul>
                                <li v-for="option in SORTOPTIONS" :key="option.value"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg">
                                    {{ option.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" flex pt-1">
            <div class="hidden md:block bg-white overflow-y-auto sticky top-20 transition-all ease-in-out duration-300"
                :class="[
                    isScrolled ? 'max-h-220' : 'max-h-175',
                    showFilter
                        ? 'translate-x-0 opacity-100 visible w-1/7 pr-2 mr-6'
                        : '-translate-x-full opacity-0 invisible w-0'
                ]">
                <div v-for="item in CATEGORIES" :key="item.name" class="mb-2">
                    <div class="flex justify-between items-center cursor-pointer">
                        <span class="text-lg font-medium">{{ item.name }}</span>
                        <span class="text-gray-500">({{ item.count }})</span>
                    </div>
                </div>
                <hr class="mt-8 mb-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between ">
                        <span class="text-lg font-semibold">Sale & Offers</span>

                        <!-- Toggle icon -->
                        <div @click="toggleDropdown('sale')" class="cursor-pointer">
                            <svg v-if="!dropdownStates.sale" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.sale ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center ">
                                <input id="sale-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black ">
                                <label for="sale-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">See
                                    Price In
                                    Bag</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="sale-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="sale-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Sale</label>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Gender</span>
                        <!-- Toggle icon -->
                        <div @click="dropdownStates.gender = !dropdownStates.gender" class="cursor-pointer">
                            <svg v-if="!dropdownStates.gender" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.gender ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center">
                                <input id="gender-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Men</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="gender-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Women</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="gender-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Unisex</label>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Colours</span>
                        <!-- Toggle icon -->
                        <div @click="toggleDropdown('color')" class="cursor-pointer">
                            <svg v-if="!dropdownStates.color" width="24px" height="24px" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F"></path>
                            </svg>
                            <svg v-else width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F"></path>
                            </svg>
                        </div>
                    </div>
                    <!-- Dropdown content for Colours -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="dropdownStates.color ? 'max-h-80 opacity-100 translate-y-0 mb-4' : 'max-h-0 opacity-0 -translate-y-2 mb-0'">
                        <div class="grid grid-cols-3 gap-4 pt-4">
                            <div v-for="color in COLORSLIST" :key="color.name"
                                class="flex flex-col items-center cursor-pointer">
                                <div class="w-8 h-8 rounded-full border border-gray-300 mb-1"
                                    :style="{ backgroundColor: color.hex }"></div>
                                <span class="text-sm text-gray-700">{{ color.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Shoes Weight</span>
                        <!-- Toggle icon -->
                        <div @click="dropdownStates.height = !dropdownStates.height" class="cursor-pointer">
                            <svg v-if="!dropdownStates.height" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.height ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center">
                                <input id="hight-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Low
                                    Top</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="hight-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Mid
                                    Top</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="hight-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">High
                                    Top</label>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Size</span>
                        <!-- Toggle icon -->
                        <div @click="toggleDropdown('size')" class="cursor-pointer">
                            <svg v-if="!dropdownStates.size" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F"></path>
                            </svg>
                            <svg v-else width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F"></path>
                            </svg>
                        </div>
                    </div>
                    <!-- Dropdown content for Size -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                        :class="dropdownStates.size ? 'max-h-180 opacity-100 translate-y-0 mb-4' : 'max-h-0 opacity-0 -translate-y-2 mb-0'">
                        <div class="grid grid-cols-4 gap-3 mt-4">
                            <button v-for="size in SIZELIST" :key="size"
                                class="border border-gray-300 rounded-md py-2 text-base font-medium hover:bg-gray-100 transition">
                                {{ size }}
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Price</span>
                        <!-- Toggle icon -->
                        <div @click="dropdownStates.price = !dropdownStates.price" class="cursor-pointer">
                            <svg v-if="!dropdownStates.price" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.price ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center">
                                <input id="price-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$0 -
                                    $25</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$25 -
                                    $50</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$50 -
                                    $100</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-4" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-4"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$100 -
                                    $150</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-5" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-5"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Over
                                    $150</label>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Width</span>
                        <!-- Toggle icon -->
                        <div @click="dropdownStates.width = !dropdownStates.width" class="cursor-pointer">
                            <svg v-if="!dropdownStates.width" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.width ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center">
                                <input id="width-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Regular</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="width-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500 ">Wide</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="width-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Extra
                                    Wide</label>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 text-gray-300">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold">Closure Type</span>
                        <!-- Toggle icon -->
                        <div @click="dropdownStates.type = !dropdownStates.type" class="cursor-pointer">
                            <svg v-if="!dropdownStates.type" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                    fill="#0F0F0F" />
                            </svg>
                            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="#0F0F0F" />
                            </svg>
                        </div>
                    </div>

                    <!-- Dropdown content -->
                    <div class="overflow-hidden transition-all duration-300 ease-in-out "
                        :class="dropdownStates.type ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'">
                        <ul class="mt-4">
                            <div class=" flex items-center">
                                <input id="type-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="type-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Slip
                                    On</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="type-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="type-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500 ">Strap</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="type-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="type-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Zipper</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="type-checkbox-4" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="type-checkbox-4"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Toggle</label>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ease-in-out w-full"
                :class="showFilter ? 'w-6/7' : 'w-full'">
                <div v-for="(product, index) in PRODUCTS" :key="index" class="bg-white h-full cursor-pointer group"
                    @click="goToDetail(product)">
                    <div class="aspect-square overflow-hidden">
                        <img :src="product.image" alt="Product Image"
                            class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div class="px-4 md:mx-0">
                        <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                        <h3 class="text-lg font-semibold">{{ product.title }}</h3>
                        <h3 class="text-lg font-medium text-gray-500">{{ product.category }}</h3>
                        <h3 class="text-lg font-medium text-gray-500">{{ product.color }}</h3>
                        <p class="text-lg font-semibold py-2">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="mx-0 md:mx-12 my-8 text-gray-300">
    <!-- Modal filter mobile -->
    <Teleport to="body">
        <transition enter-active-class="transition-all duration-300 ease-in-out"
            leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="translate-y-full opacity-0"
            enter-to-class="translate-y-0 opacity-100" leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-full opacity-0">
            <div v-if="showMobileFilter" class="fixed inset-0 z-50 flex flex-col bg-white w-full h-full md:hidden">
                <div class="flex justify-between items-center p-4 border-b">
                    <span class="text-xl font-semibold">Filter</span>
                    <button @click="showMobileFilter = false" class="text-2xl px-2">&times;</button>
                </div>
                <div class="flex-1 overflow-y-auto p-4">
                    <div class="">
                        <span class="text-lg font-semibold">Gender</span>
                        <ul class="">
                            <div class=" flex items-center pt-2">
                                <input id="gender-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Men</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="gender-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Women</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="gender-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="gender-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Unisex</label>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">
                    <div class="">
                        <span class="text-lg font-semibold">Sale & Offers</span>
                        <ul class="">
                            <div class=" flex items-center pt-2">
                                <input id="sale-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black ">
                                <label for="sale-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">See
                                    Price In
                                    Bag</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="sale-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="sale-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Sale</label>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">
                    <div class="">
                        <span class="text-lg font-semibold">Colour</span>
                        <ul class="">
                            <div class="grid grid-cols-3 gap-4 pt-4">
                                <div v-for="color in COLORSLIST" :key="color.name"
                                    class="flex flex-col items-center cursor-pointer">
                                    <div class="w-8 h-8 rounded-full border border-gray-300 mb-1"
                                        :style="{ backgroundColor: color.hex }"></div>
                                    <span class="text-sm text-gray-700">{{ color.name }}</span>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">

                    <div class="">
                        <span class="text-lg font-semibold">Shoes Weight</span>
                        <ul class="">
                            <div class=" flex items-center pt-2">
                                <input id="hight-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Low
                                    Top</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="hight-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Mid
                                    Top</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="hight-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="hight-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">High
                                    Top</label>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">

                    <div class="">
                        <span class="text-lg font-semibold">Size</span>
                        <ul class="">
                            <div class="grid grid-cols-4 gap-3 mt-4">
                                <button v-for="size in SIZELIST" :key="size"
                                    class="border border-gray-300 rounded-md py-2 text-base font-medium hover:bg-gray-100 transition">
                                    {{ size }}
                                </button>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">

                    <div class="">
                        <span class="text-lg font-semibold">Price</span>
                        <ul class="">
                            <div class=" flex items-center pt-2">
                                <input id="price-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$0 -
                                    $25</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$25 -
                                    $50</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$50 -
                                    $100</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-4" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-4"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">$100 -
                                    $150</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="price-checkbox-5" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="price-checkbox-5"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Over
                                    $150</label>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">

                    <div class="">
                        <span class="text-lg font-semibold">Width</span>
                        <ul class="">
                            <div class=" flex items-center pt-2">
                                <input id="width-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-1"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Regular</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="width-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-2"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500 ">Wide</label>
                            </div>
                            <div class=" flex items-center">
                                <input id="width-checkbox-3" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-5 h-5 rounded-sm accent-black">
                                <label for="width-checkbox-3"
                                    class="w-full  ms-2 text-lg font-medium cursor-pointer hover:text-gray-500">Extra
                                    Wide</label>
                            </div>
                        </ul>
                    </div>
                    <hr class="mt-8 mb-4 text-gray-300">
                    <!-- ...add more filter sections as needed... -->
                </div>
                <div class="p-4 border-t">
                    <button @click="showMobileFilter = false"
                        class="w-full bg-black text-white py-2 rounded-4xl text-lg font-semibold">
                        Apply
                    </button>
                </div>
            </div>
        </transition>
    </Teleport>
</template>