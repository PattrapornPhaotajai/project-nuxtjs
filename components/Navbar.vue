<template>
    <div class=" bg-pink-400 mx-auto flex justify-between items-center gap-6">
            <div class ="flex items-center justify-center gap-12 ml-6">
                <img src="/1.png" class=" h-20 w-30  object-cover mb-2 mt-2" alt="proud">
                <p class=" "><a href="/"> หน้าแรก </a> </p>
                <p class=" "> <a href="/home"> จองคิว  </a></p>
            </div>
            
           <a href="/login">เข้าสู่ระบบ</a>
        </div>
</template>

<script>
export default {
  data() {
    return {
      isOverlayVisible: false
    };
  },
  methods: {
    showOverlay() {
      this.isOverlayVisible = true;
    },
    hideOverlay() {
      this.isOverlayVisible = false;
    }
  }
};
</script>

<style>
.ovlc{
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>