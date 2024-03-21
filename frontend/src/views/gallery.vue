<template>
    <div class="gallery">
       <div class="grid grid-cols-2 md:grid-cols-3 gap-7 p-8">
         <div v-for="(image, index) in images" :key="index">
           <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" :src="image.src" :alt="image.alt">
         </div>
       </div>



<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
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