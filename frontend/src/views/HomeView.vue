<template>
 <div class="home">  
   <div id="default-carousel" class="relative w-full" data-carousel="slide">
    
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
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
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
 

  <div class="aside">
    <div class="typing">
     <div class="department" id="wrapper">Choose a department</div>
     </div>
       <div class="content">


        <div class="card1" id="text">
            <router-link to="/Products" class="p-4 absolute top-0 left-0">Mens Watches</router-link>
            <img src="https://i.postimg.cc/G2qvZdHB/style.jpg" class="img"  alt="">
        </div>

        <div class="card2" id="text">
            <router-link to="/Products1" class="p-4 absolute top-0 left-0">Womens Watches</router-link>
            <img src="https://i.postimg.cc/K8pWPhZ5/what-womens-watches-are-in-fashion-cover.webp" class="img" style="height: 185px;" alt="">
        </div>

        <div class="card3" id="text">
            <router-link to="/gallery" class="p-4 absolute top-9 left-12">Gallery</router-link>
            <img src="https://i.postimg.cc/D0Y9Hwpz/istockphoto-609908294-612x612.jpg" class="img" alt="">
        </div>    
    </div>
  </div>
 </div>
</template>



<style scoped>

.home{
    margin-top: 5.5rem;
}

.company{
    border: solid 1px black;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
}

.p-4{
    font-size: 3rem;
}

.relative{
   animation: fadeInDownBigFromLeft 1s ease-out;
}

#text{
  font-family: "Rakkas", serif;
  font-weight: 400;
  font-style: normal;

}

.content{
    animation: fadeInDownBigFromRight 1s ease-out !important;
}

@keyframes fadeInDownBigFromRight {
 from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
 }

 to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
 }
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

.aside{
    padding: 2rem;
    display: flex;
    margin-TOP: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: grid;  
}

.content{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 1rem;
    margin: auto;
}

#text{
  text-align: center;
  position: relative;
} 

 .card1{
    border: solid 1px black;
    height: 187px;
    width: 280px;
    transition: 0.5s ease-in-out;
    
}
.card1:hover{
    box-shadow: 1px 4px 25px 5px rgb(148, 148, 148);
    transition: 0.5s;
    transform: scale(1.05);
}    
    

.card2{
    border: solid 1px black;
    height: 187px;
    width: 280px;
    transition: 0.5s ease-in-out;
}
.card2:hover{
    box-shadow: 1px 4px 25px 5px rgb(148, 148, 148);
    transition: 0.5s;
    transform: scale(1.05);
}




.card3{
    border: solid 1px black;
    height: 187px;
    width: 280px;
    transition: 0.5s ease-in-out;

}
.card3:hover{
    box-shadow: 1px 4px 25px 5px rgb(148, 148, 148);
    transition: 0.5s;
    transform: scale(1.05);
}




@media (max-width: 1330px){
    .content{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1200px){
   .content{
        grid-template-columns: 1fr 1fr 1fr;
      }
}

@media (max-width: 1080px) {
  .content{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 890px) {
    .content{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

@media (max-width: 780px) {
  .content{
      grid-template-columns: 1fr 1fr ;
    }
  }
@media (max-width: 500px) {
    .content{
      grid-template-columns: 1fr;
    }
  }

.department{
    padding: 1rem;
    font-size: 2rem;
    text-decoration: underline;
    font-family: "Calligraffitti", cursive;
}


.department{
    animation: fadeInDownBigFromTop 1s ease-out !important;
}

@keyframes fadeInDownBigFromTop {
 from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
 }

 to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
 }
}

@keyframes typing {
    from {
      width: 0
    }
  }
      
  @keyframes blink {
    50% {
      border-color: transparent
    }
  }
</style>
