

<template>

<div class="min-h-screen bg-pink-50 ">
    <Navbar/>
        <main >
            <div class=" text-center  grid grid-cols-3 m-5">
                <p class=" justify-self-center bg-pink-300 h-12 w-12 rounded-full  pt-3">1</p>
                <p class="justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">2</p>
                <p class="justify-self-center bg-gray-300 h-12 w-12 rounded-full  pt-3">3</p>
            </div>
            <div> 
                <p class=" bg-blue-100 w-20 h-7 text-center ml-10 rounded-lg"><a href="/home" > กลับ </a></p>
                <div class=" bg-pink-200 h-80 w-80% m-12 rounded-lg ">
                    <p class=" text-xl ml-5 font-semibold">โปรโมชั่น</p> 
                    <p class=" bg-gray-200 h-20 w-4/5 pl-3 ml-6 mt-8 mb-3 rounded-lg ">ต่อเล็บ </p>
                    <p class=" ml-8 "><input type="checkbox">ค่าถอด pvc  70฿<input type="checkbox" class="ml-8">ค่าล้างเล็บ 70฿</p>
                    <input type="date" class=" ml-8 mt-4"> 
                    <p class=" bg-pink-300 w-20 h-7 text-center rounded-lg ml-auto mr-12"><a href="/confirm1" > จองเลย </a></p>
                    <select  class="pl-3 border rounded mb-8 ml-8 w-60" >
                        <option >10:00</option>
                        <option >12:00</option>
                        <option >14:00</option>
                        <option >15:00</option>
                        <option >17:00</option>
                        <option >19:00</option>
                        <option >20:00</option>
                    </select>
                </div>
            </div>
            
        </main>
        <footter/>
    </div>
</template>
<script setup>




</script>