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
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" v-model="meal.price">
                            <span class="text-danger" v-if="errors.price">{{ errors.price[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Category</label>
                            <select class="form-select" v-model="meal.category">
                                <option value="burger">Burger</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="sandwich">Sandwich</option>
                                <option value="spaguetti">Spaguetti</option>
                            </select> 
                            <span class="text-danger" v-if="errors.category">{{ errors.category[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="meal.description"></textarea>
                            <span class="text-danger" v-if="errors.description">{{ errors.description[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" @change="onFileSelected" type="file" id="image">
                            <span class="text-danger" v-if="errors.image">{{ errors.image[0] }}</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="addNewMeal" class="btn btn-primary">Save changes</button>
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
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

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
    methods: {
        onFileSelected(e) {
            this.meal.image = e.target.files[0]
        },

        async addNewMeal() {
            const data = new FormData()
            data.append('name', this.meal.name)
            data.append('price', this.meal.price)
            data.append('category', this.meal.category)
            data.append('description', this.meal.description)
            data.append('image', this.meal.image)
            try {
                const response = await axiosInstance.post("/add-meal", data)
                if (response.data.status === 200) {

                     const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    })
                    
                    store.dispatch('meals/getMeals')
                } else {
                    this.errors = response.data.validation_err
                }
                this.meal.name = ''
                this.meal.price = ''
                this.meal.category = ''
                this.meal.description = ''

            } catch (error) {
                console.log(error)
            }
        },
    }
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
