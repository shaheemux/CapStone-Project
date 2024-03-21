<template>
  <div class="about .grid">
    <div class="parent">
       <img src="https://i.postimg.cc/DZvyTQ0r/istockphoto-533714204-612x612.jpg" style="height: 350px; width: 400px;" class="p-4" alt="">
    </div>
    <div class="child">

    </div>
  </div>
</template>

<style scoped>
  .about{
    height: 100%;
    border: solid 1px black;
    margin-top: 5.5rem;
    padding: 1rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
    flex-wrap: wrap;
  }

.parent{
     height: 350px;
     width: 400px;
     margin-right: 4rem;
}

.child{
  border: solid;
  height: 350px;
  width: 400px;
}


img{
  border-radius: 1rem !important;
}
</style>
