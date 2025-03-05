<template>
    <div class="min-h-screen bg-pink-50 ">
        <adminnavbar/>
        <main class=" mx-auto mt-7 text-center">
            <div class="bg-pink-300 h-14 rounded-lg text-center p-4 m-4 grid grid-cols-4">
                <a href="/adminqueue" >การจองคิว</a> 
                <a href="" class=" bg-white rounded-lg">บริการ&ราคา</a> 
                <a href="/adminreview">รีวิวลูกค้า</a>
                <a href="/admincancel">ยกเลิก&คืนเงิน</a>   
            </div>
            <div>
                <p class="text-left ml-32 ">ชื่อบริการ (เช่น โปรต่อเล็บ)</p>
                <input type="text" class=" w-4/5 h-12 rounded-lg">
                <p class="text-left ml-32 ">ราคา (บาท)</p>
                <input type="text" class=" w-4/5 h-12 rounded-lg">
                <p class="text-left ml-32 ">รายละเอียดบริการ (เช่น ทาสี + เพ้นเล็บ + ใส่อะไหล่ไม่อั้น)</p>
                <input type="text" class=" w-4/5 h-12 rounded-lg">
                <br><button type="submit" class="mt-3 bg-pink-100 rounded-[10px] w-20 h-12 bg-right-bottomt">เพิ่มบริการ</button>
            </div>
            <div class=" place-self-center bg-white h-24 w-4/5 mt-5 text-left rounded-lg grid grid-cols-2 ">
                <p class=" pl-6 pt-2">โปรต่อเล็บ
                <br>ราคา 299 บาท
                <br>ทาสี+เพ้นเล็บ+ ใส่อะไหล่ได้ไม่อั้น</p>
                <i class="fa-solid fa-trash pt-10 ml-auto mr-8" style="color: #fd4e4e;"></i>
                
            </div>
            <div class=" place-self-center bg-white h-24 w-4/5 mt-5 text-left rounded-lg grid grid-cols-2 ">
                <p class=" pl-6 pt-2">โปรไไม่ต่อเล็บ
                <br>ราคา 189 บาท
                <br>ทาสี+เพ้นเล็บ+ ใส่อะไหล่ได้ไม่อั้น</p>
                <i class="fa-solid fa-trash pt-10 ml-auto mr-8" style="color: #fd4e4e;"></i>
                
            </div>
        </main>
    </div>
</template>