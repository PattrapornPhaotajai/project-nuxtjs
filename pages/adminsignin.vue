<template>
    <div class="min-h-screen flex flex-col justify-center items-center gap-6 py-10 bg-gray-100">
      <img src="/7.png" alt="Logo" class="w-[400px] h-[270px]" />
      <form class="bg-white p-6 rounded-lg shadow-md w-[400px] space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-pink-300" required />
        </div>
        <div>
        <label class="block text-sm font-medium text-gray-700">Phone Number:</label>
        <div class="flex gap-2">
          <input v-model="phoneNumber" type="text" class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-blue-300" required />
          <button type="button" @click="sendOTP" class="bg-pink-400 text-white px-3 py-1 rounded-md" :disabled="sendingOTP">
            {{ sendingOTP ? 'Sending...' : 'Send OTP' }}
          </button>
        </div>
      </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">OTP Number:</label>
          <input type="text" class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-pink-300" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-pink-300" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input type="password" class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring focus:ring-pink-300" required />
        </div>
        <div class="flex justify-between items-center gap-4">
          <button type="submit" class=""><img src="/st.png" alt="" class="w-52 h-10"></button>
          <NuxtLink to="/login" class=""><img src="/dd (2).png" alt="" class="w-52 h-10"></NuxtLink>
        </div>
        <a href="/adminlogin" class=""><h1 class="bg-pink-300 h-10 w-24 flex justify-center items-center rounded-[10px] mt-5">Go to Login</h1></a>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const phoneNumber = ref('');
  const sendingOTP = ref(false);
  
  const sendOTP = () => {
    if (!phoneNumber.value) {
      alert('Please enter your phone number first.');
      return;
    }
    sendingOTP.value = true;
    setTimeout(() => {
      sendingOTP.value = false;
      alert(`OTP sent to ${phoneNumber.value}`);
    }, 2000); // Simulating a delay for OTP sending
  };
  
  const handleSignIn = () => {
    alert('Sign in process triggered.');
  };
  </script>