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
