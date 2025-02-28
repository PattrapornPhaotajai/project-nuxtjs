<template>
  <div class="relative">
    <!-- Swiper -->
    <swiper
      ref="swiperRef"
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="`/${slide.image}`" :alt="slide.alt" class="w-[100%] h-auto" />
      </swiper-slide>
    </swiper>

    <!-- Custom Slide Control Buttons -->
   
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // ใช้ Vue 3
import { Swiper, SwiperSlide } from 'swiper/vue'; // ใช้ Swiper และ SwiperSlide สำหรับ Vue 3
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';


const slides = [
  { image: '8.jpg', alt: 'Slide 1' },
  { image: '2.png', alt: 'Slide 2' },
  { image: '3.png', alt: 'Slide 3' },
];

const swiperRef = ref(null);

// ฟังก์ชันสำหรับการเปลี่ยนสไลด์
const nextSlide = () => {
  swiperRef.value.swiper.slideNext();
  console.log('> slide')
};

const prevSlide = () => {
  swiperRef.value.swiper.slidePrev();
  console.log("< slide")
};

// ตรวจสอบว่า Swiper ถูกสร้างขึ้นมาแล้ว
onMounted(() => {
  console.log(swiperRef.value); // สำหรับการดีบัก
});
</script>

<style scoped>
.mySwiper {
  width: 50%;
  height: 300px;
}

button {
  z-index: 10;
}
</style>
