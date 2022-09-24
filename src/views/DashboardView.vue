<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>Dashboard</h1>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'
export default {
    components: {
        Sidebar
    },
    setup() {
        return {
            sidebarWidth,
            ordersCount: '',
            mealsCount: '',
            usersCount: '',
            income: ''
        }
    },
    methods: {
        async getTotalCount() {
            const response = await axiosInstance.get('/statistics')
            this.ordersCount = response.data.ordersCount
            this.mealsCount = response.data.mealsCount
            this.usersCount = response.data.usersCount
            this.income = response.data.income
        },

    },
}
</script>

<style scoped>
.dashboard {
    padding: 20px;
    transition: 0.3s ease;
}
</style>
