<template>
     <div class="min-h-screen  bg-pink-50 ">
        <Navbar/>
        <main>
            <div class=" mt-12 ml-8 text-2xl font-semibold"> ประวัติการจองคิว</div>
            <div class=" text-center  grid grid-cols-3 mt-12">
                <a href="/recording2" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12">กำลังรอคิว</a>
                <a href="/recordend2" class=" bg-pink-300  rounded-lg  pt-1.5  ml-12"> เสร็จสิ้น </a>
                <a href="/recordcancel2" class=" bg-pink-200  rounded-lg  pt-1.5  ml-12">คิวถูกยกเลิก</a>
            </div>
            <div class=" bg-pink-200 h-52 w-80% mt-12 rounded-lg flex m-12">
                    <img src="/25.jpg" class=" p-6" >
                    <ul class="m-5">
                        <li class=" font-bold">โปรโมชั้น</li>
                        <li>ไม่ต่อเล็บ</li>
                        <li><i class="fa-regular fa-calendar-days pr-3"></i>xx/xx/xxxx</li>
                        <li><i class="fa-regular fa-clock pr-3"></i>00:00</li>
                        <li><i class="fa-regular fa-user pr-3"></i>1 คิว</li>
                        <li> ค่าจอง</li>

                    </ul>
                    <p class=" font-semibold text-red-500 text-right mt-36"> 100฿</p>
                </div>
                <div class=" text-center">
                     <a href=""><i class="fa-regular fa-message place-item-center bg-pink-300 h-10 w-1/5 text-center pt-2 rounded-lg">  รีวิวและให้คะแนน </i> </a>
                </div>
            </main>
            <footter/>
        </div>
        
</template>