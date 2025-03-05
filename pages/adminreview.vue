<template>
    <div class="min-h-screen bg-pink-50 ">
        <adminnavbar/>
        <main class=" mx-auto mt-7 text-center">
            <div class="bg-pink-300 h-14 rounded-lg text-center p-4 m-4 grid grid-cols-4">
                <a href="/adminqeueue" >การจองคิว</a> 
                <a href="/adminserve">บริการ&ราคา</a> 
                <a href="" class=" bg-white rounded-lg">รีวิวลูกค้า</a>
                <a href="/admincancel">ยกเลิก&คืนเงิน</a>   
            </div>
            <div class="text-center bg-pink-200 grid grid-cols-4 ml-6 mt-6 mr-6 rounded-t-lg">
                <p>ชื่อลูกค้า</p>
                <p>คะแนน</p>
                <p>รีวิว</p>
                <p>แสดงบนเว็บ</p>
            </div>
            <div class="text-center h-16 bg-gray-50 grid grid-cols-4 ml-6 mr-6">
                <p>AA</p>
                <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-regular fa-star" style="color: #c7c7c7;"></i></p>
                    <p>โปร 189</p>
                <p><input type="checkbox"></p>
                
                
            </div>
 </main>
    </div>
</template>