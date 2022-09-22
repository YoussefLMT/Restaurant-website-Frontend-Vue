<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container mt-5">
    <h2 class="title-txt text-center">Our <span>Menu</span></h2>
</div>

<div class="menu">
    <div class="content">
        <Meal image="@/assets/pexels-pixabay-326279.jpg" name="meal" price="20" id="88" />
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Meal from '@/components/Meal.vue'

export default {
    components: {
        NavBar,
        Footer,
        Meal
    },
    mounted() {
        store.dispatch('meals/getMeals')
    },
    computed: {
        meals() {
            return store.getters['meals/meals']
        },
        loading() {
            return store.getters['meals/loading']
        }
    },
}
</script>

<style scoped>
.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}

.title-txt {
    color: #111;
    font-size: 50px;
    font-weight: 500;
}

.title-txt span {
    color: #e74c3c;
    font-weight: 700;
}

.menu {
    padding: 0px 100px;
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
</style>
