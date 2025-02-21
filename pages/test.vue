<template>
    <div>
        <Navbar />
    <div class="bg-pink-200 h-20 flex flex-col">
        <div class="flex justify-center items-center h-20">
            ghdughiodfhg
        </div>

        <div>
            <i class="fa-solid fa-image"></i>
        </div>
        


        <div class="pt-10">
            <button @click="showOverlay">Show Overlay</button>

    <!-- Overlay div that will be shown or hidden -->
            <div v-if="isOverlayVisible" class="ovl fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[999px]" @click="hideOverlay">
            <div class="ovlc bg-white p-20 rounded-[8px] max-w-[500px] w-[100%] text-center" @click.stop>
                <a href="/home">Overlay Content</a>
                <p>Click outside to close the overlay or close using the button below.</p>
                <button @click="hideOverlay">Close Overlay</button>
            </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';

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
.ovl{
    background: rgba(0, 0, 0, 0.7);
}

.ovlc{
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>