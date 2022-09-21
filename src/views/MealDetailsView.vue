<template>
<div class="container mt-5">
    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>
    <div v-else class="row">
        <div class="col-md-6">
            <img class="details-img" :src="'http://127.0.0.1:8000/' + meal.image">
        </div>
        <div class="col-md-6">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>{{ meal.name }}</h5>
            <p>Price: {{ meal.price}}DH</p>
            <p>Description: {{ meal.decoration }}</p><br>
            <button class="btn btn-primary">Add Product To Cart</button>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store'

export default {
    mounted() {
        store.dispatch('MealDetails/getMeal', this.$route.params.id)
    },
    computed: {
        meal() {
            return store.getters['MealDetails/meal']
        },
        loading() {
            return store.getters['MealDetails/loading']
        }
    },
}
</script>

<style scoped>
.details-img {
    height: 300px;
}
</style>
