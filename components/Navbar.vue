<template>
  <div class="bg-pink-400 mx-auto flex justify-between items-center gap-6">
    <div class="flex items-center justify-center gap-12 ml-6">
      <img src="/1.png" class="h-20 w-30 object-cover mb-2 mt-2" alt="proud">
      <p><a href="/"> หน้าแรก </a></p>
      <p><a href="/home"> จองคิว </a></p>
    </div>

    <div class="mr-6">
      <template v-if="isLoggedIn">
        <button @click="openProfile" class="text-white"><i class="fa-regular fa-circle-user"></i></button>
      </template>
      <template v-else>
        <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
      </template>
    </div>

    <!-- ✅ Profile Overlay (กดตรงไหนก็ปิดได้) -->
    <div 
      v-if="showProfile" 
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
      @click.self="closeProfile"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-[400px]  absolute top-[500px]">
        <a href="/recording1" class="text-xl font-bold ">ประวัติการจองคิว</a>

        <!-- 🛠️ ใส่เนื้อหาของ Overlay ได้ที่นี่ -->
        <slot></slot>

        <!-- ✅ ปุ่ม Logout ใน Overlay -->
        <button @click="logout" class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full">
          ออกจากระบบ
        </button>

        <!-- ✅ ปุ่มปิด Overlay -->
        <button @click="closeProfile" class="absolute top-2 right-2 text-gray-600 text-xl">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      showProfile: false
    };
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem('user'); // เช็คว่ามีข้อมูล user ใน localStorage หรือไม่
  },
  methods: {
    openProfile() {
      this.showProfile = true;
    },
    closeProfile() {
      this.showProfile = false;
    },
    logout() {
      localStorage.removeItem('user'); // ลบข้อมูลผู้ใช้
      this.isLoggedIn = false;
      this.showProfile = false;
      window.location.reload(); // รีเฟรชหน้าเพื่อให้ Navbar อัปเดตเป็น "เข้าสู่ระบบ"
    }
  }
};
</script>