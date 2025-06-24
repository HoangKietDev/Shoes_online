<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const category = [
    { name: 'Running', count: 100 },
    { name: 'Baseketball', count: 50 },
    { name: 'Football', count: 30 },
    { name: 'Skateboarding', count: 20 },
    { name: 'Golf', count: 20 },
    { name: 'Tennis', count: 20 },
    { name: 'Athletics', count: 20 },
    { name: 'Walking', count: 20 },
];

const isScrolled = ref(false)
const showFilter = ref(false)


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
    <div class="mx-6 md:mx-12 ">
        <div class="flex justify-between items-center py-6 sticky top-0 bg-white z-10">
            <div class="text-2xl font-medium">Men's Shoes (100)</div>
            <div class="flex justify-between items-center">
                <div class="px-8 flex items-center cursor-pointer" @click="showFilter = !showFilter">
                    <div class="text-base px-2 font-medium">Filter</div>
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

                <div class="flex items-center">
                    <div class="text-base px-2 font-medium">Sort By1</div>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.31005 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>

                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex gap-4 ">
            <div class="hidden md:block w-1/5 bg-white pr-2 mr-6 overflow-y-auto sticky top-20 transition-all duration-500"
                :class="{
                    'max-h-160': isScrolled,
                    'max-h-120': !isScrolled,
                    'block': showFilter,
                    'hidden': !showFilter
                }">
                <div v-for="item in category" :key="item.name" class="mb-2">
                    <div class="flex justify-between items-center">
                        <span class="text-base font-medium">{{ item.name }}</span>
                        <span class="text-gray-500">({{ item.count }})</span>
                    </div>
                </div>
                <hr class="mt-8 mb-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Sale & Offers</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Size</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Colours</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Shoe Height</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Brand</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Air Max</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Width</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>
                <hr class="my-4 text-gray-300">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-base font-semibold">Sports</span>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                fill="#0F0F0F"></path>
                        </g>
                    </svg>
                </div>

            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <div class="bg-white h-100">
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <div class="bg-white h-full">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <div class="bg-white h-100">
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <div class="bg-white h-full">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <div class="bg-white h-100">
                    <img src="https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09528.jpg?auto=webp&quality=75&width=1024"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <div class="bg-white h-full">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f77e6165-4d2e-4919-b0a9-4a7e6e0e1dbf/JORDAN+CMFT+ERA.png"
                        alt="Product Image" class="w-full h-95 object-cover mb-2 rounded">
                    <h3 class="text-base font-semibold text-red-500">Just In</h3>
                    <h3 class="text-base font-semibold">Nike Air Max Dn</h3>
                    <h3 class="text-base font-medium text-gray-500">Men's Shoes</h3>
                    <h3 class="text-base font-medium text-gray-500">1 color</h3>
                    <p class="text-base font-semibold py-2">$99.99</p>
                </div>
                <hr class="my-4 text-gray-300">
                <!-- Repeat for more products -->
            </div>
        </div>
    </div>
</template>