<template>
<div class="container mt-5">

    <div class="row">
        <div class="col-md-6">
            <img class="details-img" src="@/assets/pexels-pixabay-326279.jpg">
        </div>
        <div class="col-md-6">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>tt</h5>
            <p>Price: 66DH</p>
            <p>Description: ttttttt</p><br>
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
