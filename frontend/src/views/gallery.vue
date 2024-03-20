<template>
    <div class="gallery">
       <div class="grid grid-cols-2 md:grid-cols-3 gap-7 p-8">
         <div v-for="(image, index) in images" :key="index">
           <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" :src="image.src" :alt="image.alt">
         </div>
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