<template>
    <div>
       <h2>Your Cart</h2>
       <ul>
         <li v-for="(item, index) in cartItems" :key="index">
           {{ item.name }} - {{ item.price }}
         </li>
       </ul>
       <button @click="clearCart">Clear Cart</button>
    </div>
   </template>
   
   <script>
   export default {
    data() {
       return {
         cartItems: []
       };
    },
    methods: {
       clearCart() {
         this.cartItems = [];
       }
    }
   };
   </script>
   
   <style scoped>
   /* Add your styles here */
   </style>
   