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
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar
    }
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
</style>
