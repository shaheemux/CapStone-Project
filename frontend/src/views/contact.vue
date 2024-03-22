<template>
    
<div class="contact">
  <div class="text-center">
   <button class="text-white bg-gray-500 hover:bg-white-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact">
   Reach out to Us
   </button>
  </div>


<div id="drawer-contact" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-contact-label">
   <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
  </svg>Contact us</h5>
   <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <form class="mb-6">
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
      </div>
      <div class="mb-6">
         <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
      </div>
      <div class="mb-6">
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <router-link to="/" class="hover:underline">TimeKeepers@gmail.com</router-link>
   </p>
   <p class="text-sm text-gray-500 dark:text-gray-400">
      <a href="#" class="hover:underline">212-456-7890</a>
   </p>
 </div>

 
 <div class="aside">
       <div class="content">


        <div class="card1" id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis, facere quod iste consequuntur et illo deleniti id voluptatum in necessitatibus possimus quidem sit iusto tempora cupiditate, hic, quisquam quas.
        </div>

        <div class="card2" id="text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis ipsum ullam quisquam dolorem nobis, libero ex provident. A voluptatum ipsum ullam magnam molestiae amet modi consectetur non voluptas at.
        </div>

        <div class="card3" id="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae delectus accusamus consectetur eius voluptate quis placeat corrupti nostrum saepe quam voluptas, tempore, corporis ratione. Eligendi porro quae obcaecati praesentium asperiores?
        </div>    
    </div>
   </div>

</div>
</template>

<style scoped>
 .contact{
    margin-top: 8rem;
    background-color: #f1f1f1;
    padding: 1rem;
    height: 100%;
 }

 #drawer-contact{
    margin-top: 5.5rem;    
    border-radius: 4px;
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
    grid-gap: 35px;
    padding: 1rem;
    margin: auto;
}

#text{
  text-align: center;
  position: relative;
  padding: 1rem;
} 

 .card1{
    border-right: 1px solid;
    height: 250px;
    width: 380px;
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

.card2{
    border-right: 1px solid;
    height: 250px;
    width: 380px;
    
}

.card3{
    border-right: 1px solid;
    height: 250px;
    width: 380px;
    animation: fadeInDownBigFromRight 1s ease-out !important;
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
      grid-template-columns: 1fr;
    }
  }
@media (max-width: 500px) {
    .content{
      grid-template-columns: 1fr;
    }
  }
</style>