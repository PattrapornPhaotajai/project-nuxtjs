<template>
    <div class="min-h-screen bg-pink-50   ">
    <Navbar/>
    <main>
        <div class=" text-center  grid grid-cols-3 m-5">
                <p class=" justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">1</p>
                <p class="justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">2</p>
                <p class="justify-self-center bg-pink-300 h-12 w-12 rounded-full  pt-3">3</p>
            </div>
            <div class=" bg-purple-100 shadow-lg h-52 w-90% mt-12 rounded-lg flex m-12">
                <img src="/25.jpg" class=" p-6" >
                    <ul class="m-5">
                        <li> โปรไม่ต่อเล็บ
                            <br>ราคา 189 บาท
                            <br>ทาสี+เพ้นเล็บ+ ใส่อะไหล่ได้ไม่อั้น</li>
                        <li><i class="fa-regular fa-calendar-days pr-3"></i>xx/xx/xxxx</li>
                        <li><i class="fa-regular fa-clock pr-3"></i>00:00</li>
                        <li><i class="fa-regular fa-user pr-3"></i>1คิว</li>
                        <li class="mb-4 mt-auto"> ค่าจอง</li>

                    </ul>
                    <p class=" font-semibold text-red-500 ml-auto mr-6 mb-4 mt-auto"> 189฿</p>

                
                </div>
                <div> 
                    <p class="ml-12 text-lg font-bold">ช่องทางการชำระเงิน</p>
                    <i class="shadow-xl fa-solid fa-money-bills bg-pink-300 h-16 w-16 rounded-lg mt-4 ml-14 pt-4 text-center"> <br>โอนเงิน</i>
                    <p class=" ml-14 font-semibold"> พร้อมเพย์ 
                        <br>(นางสาวxxxxx xxxxxx)
                        <br>000-000-0000
                    </p>
                    <p class=" text-center font-black mt-6 "> หลักฐานการชำระเงิน
                        <br><input type="file"></p>
                        <div class=" grid grid-cols-2 ">
                        <a href="/" > <p class="shadow-xl bg-blue-200 w-32 h-7 place-self-center text-center font-bold rounded-md mb-20"> ยกเลิก </p></a>
                        <button @click="showOverlay = true"><p class="shadow-xl bg-pink-300 w-32 h-7 place-self-center text-center font-bold rounded-md mb-20"> ยืนยัน </p>
                        </button>
                    <Overlay :show="showOverlay" @pay2="showOverlay = false">
                        <h2 class="text-lg font-semibold">ยืนยันข้อมูล</h2>
                        
                    </Overlay>
                </div>
                    
                    
                </div>
    </main>
    <footter/>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Overlay from "~/components/Overlaypay2.vue";

const showOverlay = ref(false);
</script>