<template>
 <spinner v-if="loading"/>
 <div id="app">
  <navbar/>
  <router-view/> 
 </div>
  <TimeKeepers/>
  <!-- <footer /> -->
</template>

<script>
import navbar from './components/navbar.vue'
import spinner from './components/spinner.vue'
import TimeKeepers from './components/TimeKeepers.vue'
// import footer from './components/footer.vue'


export default {
  components: {
    navbar,
    spinner,
    TimeKeepers,
    // footer
}
}
// data(){
//    return {
//     loading: true,
//    };
// },
//  mounted () {
//   setTimeout(() =>{
//     this.loading = false;
//   }, 2000);
//  }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000 o !important;
  /* color: #2c3e50; */
}

/* nav {
  padding: 30px;
} */

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
