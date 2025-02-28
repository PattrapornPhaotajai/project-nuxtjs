<template>
    <div class="min-h-screen">
        <div class="flex flex-col justify-center items-center py-5 gap-10">
            <img src="/1.png" alt="">
            <form class="flex flex-col gap-10">
                <div>
                    <label>Name:</label>
                    <input 
                    type="text"
                    class="w-full border border-black"
                    required>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                    type="text"
                    class="w-full border border-black"
                    required>
                </div>
                <div>
                    <label>OTP Number:</label>
                    <input 
                    type="text"
                    class="w-full border border-black"
                    required>
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                    type="text"
                    class="w-full border border-black"
                    required>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input 
                    type="text"
                    class="w-full border border-black"
                    required>
                </div>
                <div class="flex justify-between items-center">
                    <button type="submit" class="bg-pink-400 rounded-[10px] w-20 h-10">Submit</button>
                    <a href="/" class="bg-red-600 text-white w-20 h-10 flex justify-center items-center rounded-[10px]">Cancel</a>
                </div>
                
            </form>
              
        </div>
    </div>
</template>