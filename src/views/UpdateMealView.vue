<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="meals">
    <h1>Update Meal</h1>

    <div class="card me" style="width: 1200px;">
        <div class="card-header">
            Meals Managment
        </div>
        <div class="card-body">

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
