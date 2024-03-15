<template>
    <form @submit.prevent="login">
       <input v-model="email" type="email" placeholder="Email" required />
       <input v-model="password" type="password" placeholder="Password" required />
       <button type="submit">Login</button>
    </form>
   </template>
   
   <script>
   import { mapActions } from 'vuex';
   
   export default {
    data() {
       return {
         email: '',
         password: '',
       };
    },
    methods: {
       ...mapActions('auth', ['login']),
       async login() {
         try {
           await this.login({ email: this.email, password: this.password });
           // Redirect to home page or dashboard after successful login
           this.$router.push('/');
         } catch (error) {
           console.error(error);
           // Handle error (e.g., display error message)
         }
       },
    },
   };
   </script>
   