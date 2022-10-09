<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>Dashboard</h1>
    <div class="row">
        <div class="col-md-3">
            <Card icon="fa-solid fa-burger" title="Meals" :count="mealsCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-brands fa-shopify" title="Orders" :count="ordersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-users" title="Users" :count="usersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-dollar-sign" title="Income" :count="income + 'DH'" />
        </div>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <BarChart />
            </div>
            <div class="col-md-6">
                <DoughnutChart />
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
import axiosInstance from '@/axios'
import Card from '../components/Card'
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/DoughnutChart'

export default {
    components: {
        Sidebar,
        Card,
        BarChart,
        DoughnutChart
    },
    data() {
        return {
            sidebarWidth,
            ordersCount: '',
            mealsCount: '',
            usersCount: '',
            income: ''
        }
    },
    mounted() {
        this.getTotalCount()
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
