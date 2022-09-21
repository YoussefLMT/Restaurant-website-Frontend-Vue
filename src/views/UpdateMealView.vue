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
import menu from '../components/menu'
import {
    SidebarMenu
} from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

export default {
    components: {
        SidebarMenu
    },
}
</script>

<style scoped>

</style>