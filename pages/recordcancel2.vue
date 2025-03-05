<template>
    <div class="min-h-screen  bg-pink-50 ">
       <Navbar/>
       <main>
           <div class=" mt-12 ml-8 text-2xl font-semibold"> ประวัติการจองคิว</div>
           <div class=" text-center  grid grid-cols-3 mt-12">
               <a href="/recording" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12">กำลังรอคิว</a>
               <a href="/recordend" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12"> เสร็จสิ้น </a>
               <a href="/recordcancel2" class=" bg-pink-300  rounded-lg  pt-1.5  ml-12">คิวถูกยกเลิก</a>
           </div>
           <div class="shadow-lgbg-purple-100 h-52 w-80% mt-12 rounded-lg flex m-12">
                   <img src="/25.jpg" class=" p-6" >
                   <ul class="m-5">
                       <li class=" font-bold">โปรโมชั้น</li>
                       <li>ไม่ต่อเล็บ</li>
                       <li><i class="fa-regular fa-calendar-days pr-3"></i>xx/xx/xxxx</li>
                       <li><i class="fa-regular fa-clock pr-3"></i>00:00</li>
                       <li><i class="fa-regular fa-user pr-3"></i>1 คิว</li>
                       <li> ค่าจอง</li>

                   </ul>
                   <p class=" font-semibold text-red-500 text-right mt-36"> 189฿</p>
               </div>
               <div class="p-2">
                <p class=" text-center p-3 text-2xl ">คำขอคืนเงิน</p>

                    <div class=" place-self-center">
                        <p>กรุณากรอกชื่อ-สกุล </p>
                        <input type="text">
                        <p>กรุณาเลือธนาคาร </p>
                    <select  class=" border rounded " >
                        <option >ธนาคารกรุงไทย</option>
                        <option >ธนาคารกสิกรไทย</option>
                        <option >ธนาคารไทยพาณิชย์ </option>
                        <option >ธนาคารออมสิน</option>
                    </select>
                        <p>กรุณากรอกเลขบัญชี</p><input type=" password">
                    </div>
                    <div class=" grid grid-cols-2 ">
                        <a href="" > <p class=" bg-blue-200 shadow-xl w-32 h-7 place-self-center text-center font-bold rounded-md mb-20"> ยกเลิก </p></a>
                        <button @click="showOverlay = true"><p class=" bg-pink-300 shadow-xl w-32 h-7 place-self-center text-center font-bold rounded-md mb-20"> ยืนยัน </p>
                        </button>
                    <Overlay :show="showOverlay" @correct="showOverlay = false">
                        <h2 class="text-lg font-semibold">ยืนยันข้อมูล</h2>
                        <p>กรณีข้อมูลผิดไม่สามารถ คืนเงินได้ทางร้านไม่รับผิดชอบทุกรณี</p>
                    </Overlay>
                </div>
               
               
                </div>
              
           </main>
           <footter/>
       </div>
       
</template>
<script setup>
import { ref } from "vue";
import Overlay from "~/components/Overlaycancel.vue";

const showOverlay = ref(false);
</script>
