<template>
<div class="sidebar" :style="{ width: sidebarWidth }">

    <div class="links">
        <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
        <SidebarLink to="/meals" icon="fa-solid fa-burger">Meals</SidebarLink>
        <SidebarLink to="/users" icon="fa-solid fa-users">Users</SidebarLink>
        <SidebarLink to="/orders" icon="fa-sharp fa-solid fa-bag-shopping">Orders</SidebarLink>
    </div>

    <button @click="logOut" class="logout-btn">Log Out</button>

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
        <i class="fas fa-angle-double-left" />
    </span>
</div>
</template>

<script>
import SidebarLink from './SidebarLink'
import {
    collapsed,
    toggleSidebar,
    sidebarWidth
} from './sidebarState'
import Swal from 'sweetalert2'
import axiosInstance from '@/axios'

export default {
    props: {},
    components: {
        SidebarLink
    },
    data() {
        return {
            collapsed,
            sidebarWidth
        }
    },
    methods: {
        toggleSidebar,

        async logOut() {
            try {
                const response = await axiosInstance.post("/logout")
                if (response.data.status === 200) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')

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

                    this.$router.push('/login')
                }
            } catch (error) {}
        }
    },

}
</script>

<style>
:root {
    --sidebar-bg-color: #1e293b;
    --sidebar-item-hover: #64748b;
    --sidebar-item-active: #334155;
}
</style><style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
    cursor: pointer;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.logout-btn {
    margin: 350px 10px 200px 10px;
    border: 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #2980b9;
    font-weight: bold;
    color: white;
}

.links{
    margin-top: 20px;
}
</style>
