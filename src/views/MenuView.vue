<template>
<NavBar />

<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>Our</span> Menu</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
        </div>
    </div>
</section>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-4 mx-auto mt-3">
            <label for="category" class="form-label">Select a category</label>
            <select class="form-select" v-model="category" @change="onChange" id="category">
                <option value="all">All</option>
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="salad">Salad</option>
                <option value="sandwich">Sandwich</option>
                <option value="spaguetti">Spaguetti</option>
            </select>
        </div>
    </div>
</div>

<div v-if="mealsTestLength === 0 && category != 'all'">
    <h5 class="text-center mt-3">There is no meal in this category</h5>
</div>

<div class="menu">
    <div v-if="loading" class="text-center mt-5 mb-5">
        <Circle />
    </div>
    <div v-else-if="category === 'all'" class="content">
        <Meal v-for="meal in meals" :key="meal.id" :image="'http://127.0.0.1:8000/' + meal.image" :name="meal.name" :price="meal.price" :id="meal.id" />
    </div>
    <div v-else-if="mealsTest" class="content">
        <Meal v-for="meal in mealsTest" :key="meal.id" :image="'http://127.0.0.1:8000/' + meal.image" :name="meal.name" :price="meal.price" :id="meal.id" />
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Meal from '@/components/Meal.vue'
import store from '@/store'
import Circle from 'vue-loading-spinner/src/components/Circle'
import axiosInstance from '@/axios'

export default {
    components: {
        NavBar,
        Footer,
        Meal,
        Circle
    },
    data() {
        return {
            category: 'all',
            mealsTest: []
        }
    },
    mounted() {
        store.dispatch('meals/getMeals')
        this.getMealsByCategory()
    },
    computed: {
        meals() {
            return store.getters['meals/meals']
        },
        loading() {
            return store.getters['meals/loading']
        },
        mealsTestLength(){
            return this.mealsTest.length
        }
    },
    methods: {
        async getMealsByCategory() {
            const response = await axiosInstance.get(`meals-category/${this.category}`)
            this.mealsTest = response.data.meals
        },

        onChange() {
            this.getMealsByCategory()
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
    height: 60vh;
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
