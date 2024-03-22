<template>
    <div class="gallery">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-7 p-8">
         <div v-for="(image, index) in images" :key="index">
           <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" :src="image.src" :alt="image.alt">
         </div>
       </div>
     </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/3RL8FQcv/aesthetic-fossil-wat-jpg-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/W3fDbZjC/fossil-watches-aesth-jpg-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/J4J0HqXc/fossil-watches-aesth-jpg.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/Zqmd5QDd/fossil-watches-aesth-jpg-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/Jtwhdyfk/fossil-watches-aesth-jpg-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/G2ytPJNC/fossil-watches-aesth-jpg-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/x1BSGDSX/fossil-watch-aesthet-jpg.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/kG2cvZC5/fossil-watch-aesthet-jpg-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/Jh7dBpss/fossil-watch-aesthet-jpg-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/xCwRg51y/fossil-watch-aesthet-jpg-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/XYskt4vv/fossil-watch-aesthet-jpg-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://i.postimg.cc/CM6YMf6C/fossil-watch-aesthet-jpg-6.jpg" alt="">
    </div>

    </div>
   </template>
   
   <script>
   export default {
    name: 'Gallery',
    data() {
       return {
         images: [
           { src: 'https://i.postimg.cc/qBCgbyVW/masculine-menhappy-c-jpg.jpg', alt: 'Masculine Men Happy' },
           { src: 'https://i.postimg.cc/CMDLH0bg/fossil-watches-singl-jpg-3.jpg', alt: 'Fossil Watches' },
           { src: 'https://i.postimg.cc/7651QhwX/images-of-fossil-wat-jpg-4.jpg', alt: 'Fossil Watches' },
           { src: 'https://i.postimg.cc/prcB7fCL/fossil-watches-singl-jpg-2.jpg', alt: 'Fossil Watches' },
           { src: 'https://i.postimg.cc/43QDF3KF/images-of-fossil-wat-jpg-1.jpg', alt: 'Fossil Watches' },
           { src: 'https://i.postimg.cc/YCHRhz9T/i-am-going-to-reques-jpg.jpg', alt: 'I Am Going to Request' }
         ]
       };
    }
   }
</script> 
 
<style scoped>

.gallery {
    margin-top: 5.5rem;
}

.h-auto{
    animation: fadeInDownBigFromLeft 1s ease-out !important;
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