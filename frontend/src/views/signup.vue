<template>
    <form @submit.prevent="signup">
       <input type="text" v-model="username" placeholder="Username" required />
       <input type="password" v-model="password" placeholder="Password" required />
       <button type="submit">Sign Up</button>
    </form>
   </template>
   
   <script>
   import { mapActions } from 'vuex';
   
   export default {
    data() {
       return {
         username: '',
         password: '',
       };
    },
    methods: {
       ...mapActions(['signupUser']),
       async signup() {
         try {
           await this.signupUser({ username: this.username, password: this.password });
           // Redirect to a success page or show a success message
           this.$router.push('/success');
         } catch (error) {
           // Handle errors (e.g., show an error message)
           console.error(error);
         }
       },
    },
   };
   </script>

<style scoped>
  
</style>
   