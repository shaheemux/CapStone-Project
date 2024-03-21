<template> 
 <div id="hpme">
  <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50 top-0 start-0">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <router-link to="/" href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://i.postimg.cc/2550sNSw/TIME-KEEPERS-removebg-preview.png" class="h-8" alt=""/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </router-link>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <router-link to="/login" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</router-link>
            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse p-4">
                <li>
                    <router-link to="/" class="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About Us</router-link>
                </li>
                <li>
                    <router-link to="/gallery" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Our Work</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Reach out to us</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>

 </div>
</template>

<style scoped>
div{
    font-family: "Thasadith", sans-serif !important;
    font-weight: 500 !important;
    font-style: normal !important;
    font-size: 1rem !important;
}

.absolute{
    background-color: aliceblue !important;
    text-align: center !important;
}

.bg-white{
    background: transparent !important;
    backdrop-filter: blur(5px)!important;
}

img{
    background: transparent !important;
    backdrop-filter: blur(5px) !important;
}

.h-8{
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

 

</style>