<template>
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="correct"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <slot></slot>
        <button @click="correct" class="mt-4 bg-pink-500 text-white px-4 py-2 rounded"><a href="/">ยืนยัน</a></button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean
  });
  
  const emit = defineEmits(["correct"]);
  
  const correct = () => {
    emit("correct");
  };
  </script>
  