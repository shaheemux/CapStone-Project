<template> 
   <div class="name">
        <span class="fixed w-full z-50 top-0 start-0 p-0">Time Keepers</span>
    </div>
</template>


<style scoped>
  .fixed{
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

.name{
  font-size: 1.5em;
  font-family: "Calligraffitti", cursive;
}

</style>