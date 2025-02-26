<template>
    <div class="min-h-screen bg-pink-50   ">
    <Navbar/>
    <main>
        <div class=" text-center  grid grid-cols-3 m-5">
                <p class=" justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">1</p>
                <p class="justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">2</p>
                <p class="justify-self-center bg-pink-300 h-12 w-12 rounded-full  pt-3">3</p>
            </div>
            <div class=" bg-pink-200 h-52 w-80% mt-12 rounded-lg flex m-12">
                    <img src="/25.jpg" class=" p-6" >
                    <ul class="m-5">
                        <li class=" font-bold">โปรโมชัน</li>
                        <li>ไม่ต่อเล็บ</li>
                        <li><i class="fa-regular fa-calendar-days pr-3"></i>xx/xx/xxxx</li>
                        <li><i class="fa-regular fa-clock pr-3"></i>00:00</li>
                        <li><i class="fa-regular fa-user pr-3"></i>1 คิว</li>
                        <li> ค่าจอง</li>

                    </ul>
                    <p class=" font-semibold text-red-500 ml-14 mt-36"> 100฿</p>

                
                </div>
                <div> 
                    <p class="ml-12 text-lg font-bold">ช่องทางการชำระเงิน</p>
                    <i class="fa-solid fa-money-bills bg-pink-300 h-16 w-16 rounded-lg mt-4 ml-14 pt-4 text-center"> <br>โอนเงิน</i>
                    <p class=" ml-14 font-semibold"> พร้อมเพย์ 
                        <br>(นางสาวxxxxx xxxxxx)
                        <br>000-000-0000
                    </p>
                    <p class=" text-center font-black mt-6"> หลักฐานการชำระเงิน
                        <br><input type="file"></p>
                    <div class=" grid grid-cols-2">
                        <p class=" bg-blue-100 w-2/5 h-7 place-self-center text-center mt-5 font-bold rounded-md"><a href="/home" > ยกเลิก </a></p>
                        <p class=" bg-pink-300 w-2/5 h-7 place-self-center text-center mt-5 font-bold rounded-md"><a href="/recording2" > ยืนยัน </a></p>
                    </div>
                    
                    
                </div>
    </main>
    <footter/>
    </div>
</template>