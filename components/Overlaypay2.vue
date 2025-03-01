<template>
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="pay2"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <slot></slot>
        <button @click="pay2" class="mt-4 bg-pink-500 text-white px-4 py-2 rounded"><a href="/recording2">ยืนยัน</a></button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean
  });
  
  const emit = defineEmits(["pay2"]);
  
  const pay2 = () => {
    emit("pay2");
  };
  </script>
  