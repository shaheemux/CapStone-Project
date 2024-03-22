<template>
  <div class="about">
    <div class="grid-container">
        <div class="grid-item1">
          <span class="span">TimeKeepers is the world’s leading Watchhouse.</span>
            <p style="padding: 1rem;">We’re more than connoisseurs.....we're collectors too. We would never tell you to buy a watch we wouldn't buy ourselves first. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa maiores ullam accusantium quia, tempore dolore totam, exercitationem ipsam libero consectetur numquam dolorem corrupti consequatur dolores veniam? Quam, ratione perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam quidem officiis similique maxime, laborum tenetur quos quibusdam beatae sequi explicabo rerum doloremque assumenda ut necessitatibus id sint voluptatibus modi.</p>
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
 

.span{
  font-size: 2rem;
  font-weight:bolder;
  text-align: left !important;
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
