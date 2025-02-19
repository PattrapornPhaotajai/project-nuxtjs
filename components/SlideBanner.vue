<template>
  <div class="relative">
    <!-- Swiper -->
    <swiper
      ref="swiperRef"
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="w-full h-auto" />
      </swiper-slide>
    </swiper>

    <!-- Custom Slide Control Buttons -->
    <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded">
      ◀
    </button>
    <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded">
      ▶
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";


const slides = [
  { image: "1.png", alt: "Slide 1" },
  { image: "2.png", alt: "Slide 2" },
  { image: "3.png", alt: "Slide 3" },
];

const swiperRef = ref(null);

// Custom navigation
const nextSlide = () => {
  swiperRef.value.swiper.slideNext();
};

const prevSlide = () => {
  swiperRef.value.swiper.slidePrev();
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 300px;
}
</style>