<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="meals">
    <h1>Update Meal</h1>

    <div class="card me" style="width: 800px;">
        <div class="card-header">
            Meals Managment
        </div>
        <div class="card-body">
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
                <button type="button" @click="updateMeal" class="btn btn-primary">Update Meal</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'
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
            errors: '',
        }
    },
    mounted() {
        this.getMeal()
    },
    methods: {
        async getMeal() {
            try {
                const response = await axiosInstance.get(`/get-meal/${this.$route.params.id}`)
                this.meal = response.data.meal
            } catch (error) {
                console.log(error)
            }
        },

        async updateMeal() {
            try {
                const response = await axiosInstance.put(`/update-meal/${this.$route.params.id}`, this.meal)
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
                } else if (response.data.status === 422) {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
            }
        }
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
</style>
