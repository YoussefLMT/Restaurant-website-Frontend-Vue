<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="meals">
    <h1>Meals</h1>

    <div class="card me" style="width: 1200px;">
        <div class="card-header">
            Meals Managment
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">category</th>
                        <th scope="col">description</th>
                        <th scope="col">image</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                 <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="meal in meals" :key="meal.id">
                        <th scope="row">{{ meal.id }}</th>
                        <td>{{ meal.name }}</td>
                        <td>{{ meal.price }}</td>
                        <td>{{ meal.category }}</td>
                        <td>{{ meal.description }}</td>
                        <td><img src="@/assets/pexels-pixabay-326279.jpg"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'
import store from '@/store'

export default {
    components: {
        Sidebar
    },

    data() {
        return {
            sidebarWidth,
            meals: {
                name: '',
                price: '',
                category: '',
                description: '',
                image: ''
            },
            message: '',
            errors: '',
        }
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
.meals {
    padding: 20px
}

.me {
    margin: 50px auto;
}

img {
    width: 50px;
}
</style>
