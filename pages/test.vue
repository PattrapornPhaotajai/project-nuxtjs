<template>
    
  
    <div><img src="1.png" class="h-[150px] w-[150px] border-radius-50% object-cover bg-gray-100">
      <input type="file">
    mm
  </div>
    

</template>
<script>
const image = document.querySelector("img"),
input = document.querySelector("input");
input.addEventListener("change",()=>{
  image.src=URL.createObjectURL(input.files[0])
}
);
</script>
