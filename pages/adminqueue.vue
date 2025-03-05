<template>
    <div class="min-h-screen bg-pink-50 ">
        <adminnavbar/>
        <main class=" mx-auto mt-7 text-center">
            <div class="bg-pink-300 h-14 rounded-lg text-center p-4 m-4 grid grid-cols-4">
                <a href="" class=" bg-white rounded-lg">การจองคิว</a> 
                <a href="/adminserve">บริการ&ราคา</a> 
                <a href="/adminreview">รีวิวลูกค้า</a>
                <a href="/admincancel">ยกเลิก&คืนเงิน</a>   
            </div>
            <div class="text-center bg-pink-200 grid grid-cols-4 ml-6 mt-6 mr-6 rounded-t-lg">
                <p>ชื่อลูกค้า</p>
                <p>วันที่&เวลา</p>
                <p>บริการ&ราคา</p>
                <p>สถานะ</p>
            </div>
            <div class="text-center bg-gray-50 grid grid-cols-4 ml-6 mr-6">
                <p>AA</p>
                <p>28/02/2565 10:00</p>
                <p>โปร 189</p>
                <p><i class="fa-solid fa-check" style="color: #63E6BE;"></i> เสร็จสิ้น</p>
                
                <p>BB</p>
                <p>28/02/2565 14:00</p>
                <p>โปร 299</p>
                <p><i class="fa-solid fa-clock" style="color: #FFD43B;"></i>รอคิว</p>

                <p>CC</p>
                <p>01/03/2565 16:00</p>
                <p> โปร 189</p>
                <p><i class="fa-solid fa-xmark" style="color: #ff7070;"></i> ยกเลิก </p>
            </div>
 </main>
    </div>
</template>