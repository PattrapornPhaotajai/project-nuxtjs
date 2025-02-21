<template>
    <div class=" bg-pink-400 mx-auto flex justify-between items-center gap-6">
            <div class ="flex items-center justify-center gap-12 ml-6">
                <img src="/1.png" class=" h-20 w-30  object-cover mb-2 mt-2" alt="proud">
                <p class=" "><a href="/"> หน้าแรก </a> </p>
                <p class=" "> <a href="/home"> จองคิว  </a></p>
            </div>
            
            <button @click="showOverlay"><i class="fa-regular fa-circle-user text-3xl mr-12"></i></button>
            <div v-if="isOverlayVisible" class="absolute top-[100px] left-[80%] flex justify-center items-center z-10" @click="hideOverlay">
            <div class="ovlc bg-gray-200 p-20 rounded-[0px] max-w-[300px] w-[100%] text-center" @click.stop>
                <a href="/home">Overlay Content</a>
                <p>Click outside to close the overlay or close using the button below.</p>
                <button @click="hideOverlay">Close Overlay</button>
            </div>
            gdrghdrighirde
            </div>
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