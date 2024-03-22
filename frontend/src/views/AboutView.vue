<template>
  <div class="about">
    <div class="grid-container">
        <div class="grid-item1">
          <span class="span">TimeKeepers is the world’s leading Watchhouse.</span>
            <p style="padding: 1rem;">We’re more than connoisseurs.....we're collectors too. We would never tell you to buy a watch we wouldn't buy ourselves first. TimeKeepers was founded in 1998 by Shaheem Salie , a passionate watch enthusiast. Inspired by the elegance and precision of fine watchmaking, Shaheem envisioned a platform where the love for timepieces could be shared with the world. Over the years, we've grown from a small online store to a trusted name in the watch e-commerce industry, thanks to our dedicated team and loyal customer base.</p>
        </div>
        <div class="grid-item">
            <img src="https://i.postimg.cc/wMx97xjn/Worlds-Leading-Watch-House.avif" style="width: 100%;">
        </div>
    </div>
    <div class="grid-container">
        <div class="grid-item1">
          <span class="span">Quality and Craftsmanship</span>
            <p style="padding: 1rem;">We are proud to be a part of a movement that values sustainability and ethical sourcing. Our commitment to these principles extends to every aspect of our business, from the materials we use to the way we source our products. We believe in creating a positive impact on the world, one watch at a time. At TimeKeepers, we are committed to offering watches that are not only beautiful but also built to last. Our collection features watches from renowned brands known for their craftsmanship and quality. We ensure that every watch we sell meets our stringent quality standards, providing our customers with peace of mind.</p>
            <p style="padding: 1rem;">Our team is the heart of TimeKeepers. Comprising of watch enthusiasts, designers, and tech experts, we work tirelessly to curate the most exquisite collection of watches. From our curators who scour the globe for the latest trends to our customer service representatives who ensure every interaction is a delight, each member of our team plays a crucial role in bringing our vision to life.</p>
        </div>
        <div class="grid-item">
            <img src="https://i.postimg.cc/Vk0fzCXL/images.jpg" style="width: 100%;">
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
    animation: fadeInDownBigFromTop 1s ease-out !important;
}

@keyframes fadeInDownBigFromTop {
 from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
 }

 to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
 }
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
