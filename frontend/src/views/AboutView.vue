<template>
  <div class="about">
    <div class="grid-container">
        <div class="grid-item1">
            <p style="padding: 1rem;"><span class="span">TimeKeepers is the world’s leading watch house.
            </span><br>We’re more than connoisseurs.....<span>we're collectors too. We would never tell you to buy a watch we wouldn't buy ourselves first.</span></p>
        </div>
        <div class="grid-item">
            <img src="https://i.postimg.cc/wMx97xjn/Worlds-Leading-Watch-House.avif" style="width: 100%;">
        </div>
    </div>
  </div>
</template>

<style scoped>


.about{
    margin: 0;
    font-family: Arial, sans-serif;
    height: 100%;
    margin-top: 4.5rem;
}
 
p{
  padding: 1rem;
}

.span{
  font-size: 2rem;
  font-weight:bolder;
}

span{
  padding: 1rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.grid-item1 {
    background-color: #f1f1f1;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    color: rgb(82, 82, 82);
    text-align: left;
}

/* Media query for screens smaller than 600px */
@media (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}

</style>
