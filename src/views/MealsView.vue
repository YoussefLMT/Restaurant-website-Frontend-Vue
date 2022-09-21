<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="meals">
    <h1>Meals</h1>

    <div class="card me" style="width: 1200px;">
        <div class="card-header">
            Meals Managment

            <!-- Button trigger add meals modal -->
            <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addMealModal">
                Add Meal
            </button>
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
                <div v-if="loading">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="meal in meals" :key="meal.id">
                        <th scope="row">{{ meal.id }}</th>
                        <td>{{ meal.name }}</td>
                        <td>{{ meal.price }}</td>
                        <td>{{ meal.category }}</td>
                        <td>{{ meal.description }}</td>
                        <td><img :src="'http://127.0.0.1:8000/' + meal.image"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add Meal Modal -->
    <div class="modal fade" id="addMealModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="fname" class="form-label">Name</label>
                            <input type="text" class="form-control" id="fname" v-model="meal.name">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" v-model="meal.price">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Category</label>
                            <input type="text" class="form-control" id="quantity" v-model="meal.category">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="meal.description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" @change="onFileSelected" type="file" id="image">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
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
            meal: {
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

.btn-add {
    float: right
}
</style>
