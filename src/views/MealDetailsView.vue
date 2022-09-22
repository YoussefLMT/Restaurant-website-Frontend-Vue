<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container">
    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>
    <div v-else class="row d-flex justify-content-center">
        <div class="col-md-4">
            <img class="details-img" :src="'http://127.0.0.1:8000/' + meal.image">
        </div>
        <div class="col-md-4">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>{{ meal.name }}</h5>
            <p><span class="title">Price:</span> {{ meal.price}}DH</p>
            <p><span class="title">Description:</span> {{ meal.description }}</p>
            <!-- <label>Quantity:</label>
            <input type="number"><br><br> -->
            <div class="quantity-toggle">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity" readonly>
                <button @click="increment()">&#xff0b;</button>
            </div>
            <button class="btn">Add Product To Cart</button>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            quantity: 1
        }
    },
    mounted() {
        store.dispatch('mealDetails/getMeal', this.$route.params.id)
    },
    computed: {
        meal() {
            return store.getters['mealDetails/meal']
        },
        loading() {
            return store.getters['mealDetails/loading']
        }
    },
    methods: {
        increment() {
            this.quantity++
        },
        
    }
}
</script>

<style scoped>
.details-img {
    height: 300px;
}

.btn {
    font-size: 15px;
    color: #fff;
    background: #e74c3c;
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
}

.btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}

.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}

.container {
    margin-top: 80px;
}

p {
    font-size: 20px;
}

.title {
    font-weight: bold;
}

.quantity-toggle {
    display: flex;
}

.quantity-toggle input {
    border: 0;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
}

.quantity-toggle button {
    border: 2px solid #ddd;
    padding: .5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
}
</style>
