<template>
    <div class="min-h-screen bg-pink-50">
        <Navbar />
        <main class="mx-auto mt-7 text-center">
            <div>
                <p class="text-2xl mt-8 ml-16 mb-6 text-left">ให้คะแนนทางร้าน</p>
            </div>
            <div class="bg-white rounded-lg w-3/5 place-self-center p-7 text-left">
                <div class="flex items-center">
                    <p>ให้คะแนนการบริการ:</p>
                    <div>
                        <i v-for="(star, index) in 5" :key="index"
                        @click="toggleRating(index + 1)"
                        :class="{'fa-solid fa-star text-yellow-500': index < rating, 'fa-regular fa-star text-gray-400': index >= rating}"
                        class="cursor-pointer text-2xl">
                        </i>
                    </div>
                </div>
                
                <p class="text-lg mt-4">เขียนรีวิว</p>
                <input type="text" class="bg-pink-100 w-4/5 h-24 mb-20 rounded-lg">
                <div class="grid grid-cols-2">
                    <a href="/recordcancel1">
                        <p class="bg-blue-100 w-32 h-7 place-self-center text-center font-bold rounded-md mb-20">ยกเลิก</p>
                    </a>
                    <button @click="showOverlay = true">
                        <p class="bg-pink-300 w-32 h-7 place-self-center text-center font-bold rounded-md mb-24">ยืนยัน</p>
                    </button>
                    <Overlay :show="showOverlay" @correct="showOverlay = false">
                        <h2 class="text-lg font-semibold">ยืนยันการรีวิว</h2>
                    </Overlay>
                </div>
            </div>
        </main>
        <footter />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Overlay from "~/components/Overlaycancel.vue";

const showOverlay = ref(false);
const rating = ref(0);

const toggleRating = (value) => {
    rating.value = rating.value === value ? 0 : value;
};
</script>