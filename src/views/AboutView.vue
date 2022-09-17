<template>
<NavBar />

<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>About</span> Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
            <router-link to="#" class="btn">Read More</router-link>
        </div>
    </div>
</section>

<div class="about">
<div class="row">
    <div class="col50 animate__animated animate__backInLeft">
        <h1 class="title-txt">About <span>Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehenderit, aut repellat, dolorem illo, voluptatem minima sapiente praesentium earum possimus nemo debitis est sunt? Cumque minus sit quis aliquam veniam!<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, deserunt maxime consequuntur dolores quae unde vitae, incidunt quisquam quibusdam voluptates sed iure ad, fugit provident optio nisi praesentium et doloremque? </p>
    </div>
    <div class="col50 animate__animated animate__backInRight">
        <div class="imgbox">
            <img src="@/assets/pexels-ella-olsson-1640777.jpg">
        </div>
    </div>
</div>
</div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components: {
        NavBar
    },
}
</script>

<style scoped>
.main {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/pexels-pixabay-326279.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
}

.main .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.main .content {
    max-width: 900px;
    text-align: center;
    margin-top: 100px;
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

.about{
    padding: 100px;
}

.row{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.row .col50{
    position: relative;
    width: 48%;
}

.row .col50 .imgbox{
    position: relative;
    width: 100%;
    height: 300px;
}

.row .col50 .imgbox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
