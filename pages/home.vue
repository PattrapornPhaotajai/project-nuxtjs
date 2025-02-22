<template>
    <div class="min-h-screen  bg-pink-50   ">
        <Navbar />
        <main class=" mx-auto text-left">
            <div><p class="text-2xl mt-8 ml-16">จองคิว</p>
                <div class=" bg-pink-200 h-52 w-80%  rounded-lg flex m-12">
                    <img src="/13.jpg" class=" p-6" > <p class=" bg-gray-200 h-20 w-4/6 pl-3 mt-8 rounded-lg ">hjhkjhjkhjkhkjh </p>
                    <a href="/daytime" class=" bg-pink-500 w-20 h-7 mt-40 mr-2 flex-none text-center rounded-lg"> จองเลย </a>
                </div> 
                <div class=" bg-pink-200 h-52 w-80% mt-12 rounded-lg flex m-12">
                    <img src="/25.jpg" class=" p-6" > <p class=" bg-gray-200 h-20 w-4/6 pl-3 mt-8 rounded-lg ">hjhkjhjkhjkhkjh </p>
                    <a href="/day" class=" bg-pink-500 w-20 h-7 mt-40 mr-2 flex-none text-center rounded-lg"> จองเลย </a>
                </div> 
                    

            </div>
            
        </main>
        <footter/>
    </div>
</template>
<script>
import footter from '~/components/footter.vue';
import Navbar from "../components/Navbar.vue";
</script>
