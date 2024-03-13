<template>
    <div>
       <h1>Login Page</h1>
      <input type="email" placeholder="username" name="Email_add" required v-model="username"><br><br>
      <input type="password" placeholder="password" name="User_password" required v-model="password">
      <br>
      <br>
      {{$store.state.loggedIn}}
      <button @click="loginUser()">Login</button>
    </div>
  </template>
  
  <script>
  export default {
       data(){
              return{
                  Email_add:'',
                  User_password:''
              }
          },
          methods:{
              loginUser(){
                 this.$store.dispatch('checkPassword',this.$data)  
              }
          }
  }
  </script>
  
  <style>
  
  </style>