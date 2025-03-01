<template>
  <div class="bg-pink-400 mx-auto flex justify-between items-center gap-6">
    <div class="flex items-center justify-center gap-12 ml-6">
      <img src="/1.png" class="h-20 w-30 object-cover mb-2 mt-2" alt="proud">
      <p><a href="/"> หน้าแรก </a></p>
      <p><a href="/home"> จองคิว </a></p>
    </div>

    <div class="mr-6">
      <template v-if="isLoggedIn">
        <NuxtLink to="/profile">โปรไฟล์ของฉัน</NuxtLink>
        <button @click="logout" class="ml-4 text-red-500">ออกจากระบบ</button>
      </template>
      <template v-else>
        <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted() {
    // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน localStorage หรือไม่
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
  },
  methods: {
    logout() {
      localStorage.removeItem('user'); // ลบข้อมูลล็อกอิน
      this.isLoggedIn = false;
      this.$router.push('/login'); // กลับไปหน้า Login
    }
  }
};
</script>