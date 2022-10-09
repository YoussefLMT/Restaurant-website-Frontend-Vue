<template>
<canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import axiosInstance from '@/axios'

export default {
    data() {
        return {
            data: {
                pendingOrdersCount: '',
                inProgressOrdersCount: '',
                shippingOrdersCount: '',
                shippedOrdersCount: ''
            }
        }
    },
    mounted() {
        const ctx = document.getElementById('myChart');

        this.getOrdersStatistics()

        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [this.pendingOrdersCount, this.inProgressOrdersCount, this.shippingOrdersCount],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };

        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
        });

        myChart

    },
    methods: {
        async getOrdersStatistics() {
            const response = await axiosInstance.get('/orders-statistics')
            this.pendingOrdersCount = response.data.pendingOrdersCount
            this.inProgressOrdersCount = response.data.inProgressOrdersCount
            this.shippingOrdersCount = response.data.shippingOrdersCount
            this.shippedOrdersCount = response.data.shippedOrdersCount
        }
    }
}
</script>

<style>

</style>
