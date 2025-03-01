<template>
    <div class="min-h-screen  bg-pink-50 ">
       <Navbar/>
       <main>
           <div class=" mt-12 ml-8 text-2xl font-semibold"> ประวัติการจองคิว</div>
           <div class=" text-center  grid grid-cols-3 mt-12 mb-20">
               <a href="" class=" bg-pink-300  rounded-lg  pt-1.5  ml-12">กำลังรอคิว</a>
               <a href="/recordend2" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12"> เสร็จสิ้น </a>
               <a href="" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12">คิวถูกยกเลิก</a>
           </div>
           <div  class=" text-3xl text-center  mb-60">-ไม่พบรายการ-</div>

           </main>
           <footter/>
        </div>
       
</template>

