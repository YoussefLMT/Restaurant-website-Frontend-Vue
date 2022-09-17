<template>
<NavBar />
<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>Are</span> you hungry?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
            <router-link to="#" class="btn">Our Menu</router-link>
        </div>
    </div>
</section>

<section class="features">
    <div class="title">
        <h2 class="title-txt">Our <span>Features</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="content">
        <Features :image="image2" name="Fresh Food" description="Lorem ipsum dolor sit amet consectetur adipisicing"/>
        <Features :image="image3" name="Free Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing"/>
        <Features :image="image4" name="Cash On Delivery" description="Lorem ipsum dolor sit amet consectetur adipisicing"/>
    </div>
</section>

<section class="menu">
    <div class="title">
        <h2 class="title-txt">Our <span>Menu</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
    <div class="content">
        <Meal :image="image" name="wajba" price="30" />
    </div>
    <div class="title">
        <a href="#" class="btn">See All</a>
    </div>
</section>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Meal from '@/components/Meal.vue'
import 'animate.css'
import image from '@/assets/pexels-ella-olsson-1640777.jpg'
import Features from '@/components/Features.vue'
import image2 from '@/assets/diet.png'
import image3 from '@/assets/delivery.png'
import image4 from '@/assets/cash-on-delivery.png'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Meal,
        Features
    },
    data() {
        return {
            image,
            image2,
            image3,
            image4
        }
    },
}
</script>

<style scoped>
.main {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/pexels-pixabay-326279.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.main .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main .content {
    max-width: 900px;
    text-align: center;
    margin-top: 240px;
}

.main .content h1 {
    font-size: 70px;
    color: #fff;
}

.content span {
    color: #e74c3c;
}

.main .content p {
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
}

.btn {
    font-size: 15px;
    color: #fff;
    background: #e74c3c;
    display: inline-block;
    padding: 10px 30px;
    margin-top: 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
}

.btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}


.title-txt {
    color: #111;
    font-size: 40px;
    font-weight: 500;
}

.title-txt span {
    color: #e74c3c;
    font-weight: 700;
}


.menu {
    padding: 100px;
}

.title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.menu .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
}

.features {
    padding: 100px;
}

.features .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 40px;
}
</style>
