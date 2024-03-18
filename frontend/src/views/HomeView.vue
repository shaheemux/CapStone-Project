<template>
 <div class="home">  
   <div id="default-carousel" class="relative w-full p-4" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/8PJfpYXc/give-me-an-image-of.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/Kv6kR5CN/give-me-an-image-of-3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/9M1pPkyZ/give-me-an-image-of-2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/9XJ8yDBK/give-me-images-of-wa.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.postimg.cc/K8yMzNM2/give-me-an-image-of-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>
  

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
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/HLgzK4XT/fossil-watches-singl-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/mDZwZLmq/fossil-watches-singl-jpg-1.jpg" alt="">
    </div>
  </div>
 </div>
</template>

<style scoped>

.home{
    margin-top: 3.5rem;
}

img{
    border-radius: 5px;
}

.relative{
   animation: fadeInDownBigFromLeft 1s ease-out;

}

@keyframes fadeInDownBigFromLeft {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
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