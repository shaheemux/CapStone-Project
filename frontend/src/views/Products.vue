<template>
<div class="products">
  <!-- <div id="products">
    <div class="row row-cols-1 row-cols-md-2 g-4">
     <div v-for="watch in $store.state.watches" :key="watch">   
      <div class="col">
       <div class="card">
         <img :src="watch.prod_url" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">{{ watch.prod_name }}</h5>
        <p class="card-text">{{ watch.price }}</p>x
      </div>
    </div>
  </div>
   </div>
  </div>
  </div> -->
  </div>
</template>

<script>
  export default{
    computed: {
        getWatches(){
            this.$tore.dispatch('getWatches')
        }
    },
    mounted(){
        this.getWacthes
    }
  }
</script>

<style scoped>
 .products{
    height: 100vh;
    margin-top: 8rem;
 }
</style>