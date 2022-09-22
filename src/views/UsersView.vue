<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="users">
    <h1>Users</h1>

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
}
</script>

<style scoped>
.users {
    padding: 20px;
    transition: 0.3s ease;
}

.us {
    margin: 50px auto;
}

img {
    width: 50px;
}

.btn-add {
    float: right
}
</style>
