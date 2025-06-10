<script setup>
import Guides from './NavComponent/Guides.vue';
import { ref, onMounted, onUnmounted } from 'vue';


const activeDropdown = ref(null);
const isTablet = ref(window.innerWidth < 1200 && window.innerWidth >= 863);
const isMobile = ref(window.innerWidth < 864);

const handleResize = () => {
    const width = window.innerWidth;
    isMobile.value = width < 863;
    isTablet.value = width >= 863 && width < 1200;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});


const showDropdown = (menu) => {
    activeDropdown.value = menu;
};

const hideDropdown = () => {

    setTimeout(() => {
        const isOverDropdown = document.querySelector('.dropdown-menu:hover');
        if (!isOverDropdown) {
            activeDropdown.value = null;
        }
    }, 50);
};

const toggleDropdown = (menu) => {
    activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const footerSections1 = ref([
    {
        title: "Shoes",
        open: false,
        items: ["Black Running Shoes", "White Running Shoes", "Nike P-6000", "Nike Initator", "V2K Run Trainers", "Nike Shox", "Nike Waffle Trainers", "Nike Cortez", "Nike Vomero", "Black Trainers", "Nike Motiva Shoes"]
    },
    {
        title: "Clothing",
        open: false,
        items: ["Yoga Trousers", "Tech Fleece Joggers", "Tech Fleece"]
    },
    {
        title: "Kids",
        open: false,
        items: ["Girls' Black Shoes", "Kids' Black Shoes"]
    },
    {
        title: "Featured",
        open: false,
        items: ["Football Club Teams", "Football", "Nike England", "Nike Run Club", "Nike Training Club", "Gift Ideas"]
    }
]);

const toggleCategory = (index) => {
    footerSections1.value[index].open = !footerSections1.value[index].open;
};

const footerSections1Expanded = ref(false);
const togglefooterSections1Expanded = () => {
  footerSections1Expanded.value = !footerSections1Expanded.value;
};


const footerSections2 = ref([
    {
        title: "Resources",
        items: [
            "Find a Store",
            "Nike Journal",
            "Become a Member",
            "Feedback",
            "Promo Codes"
        ],
        open: false
    },
    {
        title: "Help",
        items: [
            "Get Help",
            "Order Status",
            "Shipping and Delivery",
            "Returns",
            "Payment Options",
            "Contact Us",
            "Reviews"
        ],
        open: false
    },
    {
        title: "Company",
        items: [
            "About Nike",
            "News",
            "Careers",
            "Investors",
            "Sustainability",
            "Purpose",
            "Report a concern"
        ],
        open: false
    }
]);

const footerSection2 = (index) => {
    footerSections2.value[index].open = !footerSections2.value[index].open;
};
</script>

<template>
    <div class="relative max-w-[1920px] mx-6 md:mx-12">
        <div class="bg-white w-full h-auto  py-6 md:py-5 mt-10 footer-links z-10 trans ">
            <hr class="mb-12 opacity-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div v-for="(section, index) in footerSections2" :key="index"
                    class="space-y-3 text-[14px] py-2 border-b-[#E5E5E5] border-b-1 md:border-0 md:border-white ">
                    <div @click="isMobile && footerSection2(index)"
                        class="flex justify-between items-center cursor-pointer">
                        <span class="my-2 inline-block text-[1rem] font-semibold">
                            {{ section.title }}
                        </span>
                        <span v-if="isMobile">
                            <svg v-if="section.open" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>

                    <Transition name="faq">
                        <div v-show="!isMobile || section.open">
                            <p v-for="(item, itemIndex) in section.items" :key="itemIndex" class="pb-4">
                                {{ item }}
                            </p>
                        </div>
                    </Transition>
                </div>

                <div class="text-left md:text-right mt-2 md:mt-0 cursor-pointer">
                    <div
                        class="flex items-center justify-start md:justify-end  border-b-[#cecece] border-b-1 md:border-0 md:border-white opacity-60 gap-1 pb-6 pt-2">
                        <svg aria-hidden="true" class="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img"
                            width="16px" height="16px" fill="none">
                            <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                                d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25">
                            </path>
                        </svg>
                        <span class="inline-block font-medium">Viet Nam</span>
                    </div>
                </div>
            </div>

            <div
                class="my-10 md:my-20 flex flex-wrap items-start md:items-center gap-2 md:gap-6 flex-col md:flex-row text-nowrap">
                <p>© 2025 Nike, Inc. All rights reserved</p>
                <div class="flex items-center">
                    <p class="hover:opacity-50 cursor-pointer" v-if="!isMobile" @mouseenter="showDropdown('guides')"
                        @mouseleave="hideDropdown">
                        Guides
                    </p>
                    <p class="hover:opacity-50 cursor-pointer" v-else @click="toggleDropdown('guides')">
                        Guides
                    </p>
                    <svg aria-hidden="true" class="summary-caret" focusable="false" viewBox="0 0 24 24" role="img"
                        width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M17.5 9.25l-5.5 5.5-5.5-5.5"></path>
                    </svg>
                    <div v-if="activeDropdown === 'guides'" @mouseenter="!isMobile && showDropdown('guides')"
                        @mouseleave="!isMobile && hideDropdown()" :class="[
                            'dropdown-menu z-100',
                            isMobile ? ' translate-y-[-200px] translate-x-[-80px]' : ' translate-y-[-185px] translate-x-[-80px]'
                        ]">
                        <Guides />
                    </div>
                </div>
                <p>Terms of Use</p>
                <p>Terms of Sale</p>
                <p>Company Details</p>
                <p>Privacy Policy</p>
                <p>Privacy & Cookies Settings</p>
            </div>
        </div>

    </div>
</template>


<style scoped>
.footer-links p {
    font-size: 14px;
    color: #000;
    opacity: 60%;
    font-weight: 500;
    cursor: pointer;
}

.footer-links p:hover {
    color: #000;
    opacity: 100%;
}

p {
    cursor: pointer;
    color: #000;
    opacity: 60%;
    font-weight: 500;
    font-size: 1rem;
}

p:hover {
    color: #000;
    opacity: 100%;
}

.faq-enter-active,
.faq-leave-active {
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
}

.faq-enter-to,
.faq-leave-from {
    max-height: 500px;
    opacity: 1;
}
</style>