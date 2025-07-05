<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const category = [
    { name: 'Running', count: 100 },
    { name: 'Baseketball', count: 50 },
    { name: 'Football', count: 30 },
    { name: 'Skateboarding', count: 20 },
    { name: 'Golf', count: 20 },
    { name: 'Tennis', count: 20 },
    { name: 'Athletics', count: 20 },
    { name: 'Walking', count: 20 },
    { name: 'Boots', count: 20 },
    { name: 'Casual', count: 20 },
    { name: 'Lifestyle', count: 20 },
    { name: 'Sandals', count: 20 },
    { name: 'Accessories', count: 20 }
];
const colorList = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Brown', hex: '#8B4513' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Cyan', hex: '#00FFFF' }
]
const sortOptions = [
    { label: 'Price: Low to High', value: 'price_low_high' },
    { label: 'Price: High to Low', value: 'price_high_low' },
    { label: 'Newest', value: 'newest' },
    { label: 'Best Selling', value: 'best_selling' }
]

const sizeList = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8,
    8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5,
    15, 15.5, 16, 16.5, 17, 17.5, 18
]

const isScrolled = ref(false)
const showFilter = ref(true)
const dropdownStates = reactive({
    sale: false,
    gender: false,
    height: false,
    price: false,
    width: false,
    type: false,
    color: false,
    size: false,
    sort: false
})

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
        <div class="px-4 flex justify-between items-center py-3 my-3 sticky top-0 bg-white z-10">
            <div class="font-medium transition-all duration-300 ease-in-out" :class="[
                isScrolled ? 'text-2xl' : 'text-3xl',
            ]">
                All Shoes (300)
            </div>
            <div class="flex justify-between items-center">
                <div class="px-8 flex items-center cursor-pointer" @click="showFilter = !showFilter">
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
                                <li v-for="option in sortOptions" :key="option.value"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg">
                                    {{ option.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex pt-1">
            <div class="hidden md:block bg-white overflow-y-auto sticky top-20 transition-all ease-in-out duration-300" :class="[
                isScrolled ? 'max-h-220' : 'max-h-175',
                showFilter
                    ? 'translate-x-0 opacity-100 visible w-1/7 pr-2 mr-6'
                    : '-translate-x-full opacity-0 invisible w-0'
            ]">
                <div v-for="item in category" :key="item.name" class="mb-2">
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
                            <div v-for="color in colorList" :key="color.name"
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
                            <button v-for="size in sizeList" :key="size"
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
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ease-in-out "
                :class="showFilter ? 'w-6/7' : 'w-full'">
                <div class=" bg-white h-full cursor-pointer">
                    <div class="aspect-square overflow-hidden">
                        <img src="../assets/images/ShoeList/AIR+JORDAN+3+RETRO.avif" alt="Product Image"
                            class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                        <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                        <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                        <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                        <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                        <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>

                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                        <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                        <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                        <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                        <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                        <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">

                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>  
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                        <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                        <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                        <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                        <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                        <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                        <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                        <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                        <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                        <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                        <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">
                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <div class=" bg-white h-full">
                    <div class="aspect-square overflow-hidden">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                            alt="Product Image" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 md:mx-0">

                    <h3 class="text-lg font-semibold text-red-500 mt-4">Just In</h3>
                    <h3 class="text-lg font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-lg font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-lg font-medium text-gray-500">1 color</h3>
                    <p class="text-lg font-semibold py-2">$99.99</p>
                    </div>
                </div>
                <!-- Repeat for more products -->
            </div>
        </div>
    </div>
</template>