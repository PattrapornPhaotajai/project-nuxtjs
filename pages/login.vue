<template>
    <div class="min-h-screen">
      <div class="bg-cover bg-center h-[365px] flex justify-center items-center" style="background-image: url('/Rectangle 4.png');">
          <div>
              <img src="/ggll.png" alt="Logo">
          </div>
      </div>
      <div class="flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold mt-8">เข้าสู่ระบบสมาชิก</h1>
          <form class="bg-white p-6 rounded-lg shadow-md w-[650px] space-y-4 mt-6">
              <div>
                  <label class="text-sm font-medium text-gray-700">Phone Number:</label>
                  <input v-model="phoneNumber" type="text" class="w-full border border-gray-300 rounded-full p-2 mt-1 focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                  <label class="text-sm font-medium text-gray-700">Password:</label>
                  <input v-model="password" type="password" class="w-full border border-gray-300 rounded-full p-2 mt-1 focus:ring focus:ring-pink-300" required />
              </div>
              <div class="mt-4 flex text-center justify-end">
                  <a href="/resetpassword" class="text-sm">ลืมรหัสผ่าน</a>
              </div>
              <div class="flex flex-col justify-center items-center gap-4">
                  <button type="submit" @click.prevent="login" class="px-3 py-1 rounded-md">
                      <img src="/inn.png" alt="Login Button">
                  </button>
                  <NuxtLink to="/signin" class="text-sm">
                      <div class="flex flex-col justify-center items-center">
                          <h1>ยังไม่มีบัญชี?</h1>
                          <h1 class="text-xl">สมัครสมาชิก</h1>
                      </div>
                  </NuxtLink>
              </div>
          </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phoneNumber: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.phoneNumber && this.password) {
          // ✅ จำลองการล็อกอิน (Mockup)
          const userData = { phoneNumber: this.phoneNumber };
          localStorage.setItem('user', JSON.stringify(userData));
  
          // ✅ เปลี่ยนหน้าไป Home หลังจากล็อกอิน
          this.$router.push('/');
        } else {
          alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
      }
    }
  };
  </script>