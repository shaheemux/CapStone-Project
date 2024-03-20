<template>
   <div class="gallery"> 
    <div class="grid grid-cols-2 md:grid-cols-3 gap-7 p-8">
     <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" id="img" src="https://i.postimg.cc/qBCgbyVW/masculine-menhappy-c-jpg.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" id="img" src="https://i.postimg.cc/CMDLH0bg/fossil-watches-singl-jpg-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" id="img" src="https://i.postimg.cc/7651QhwX/images-of-fossil-wat-jpg-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" id="img" src="https://i.postimg.cc/prcB7fCL/fossil-watches-singl-jpg-2.jpg" alt="">
    </div>
    

    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/43QDF3KF/images-of-fossil-wat-jpg-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/YCHRhz9T/i-am-going-to-reques-jpg.jpg" alt="">
    </div>    
  </div>    
 </div> 
</template>

<style scoped>

.gallery {
    margin-top: 4rem;
}

.h-auto{
    animation: fadeInDownBigFromLeft 1s ease-out;
}


@keyframes animate__fadeInLeft {
 from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
 }

 to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
 }
}

</style>