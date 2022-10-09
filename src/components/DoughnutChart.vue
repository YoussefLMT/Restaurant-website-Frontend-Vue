<template>
<canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
        const ctx = document.getElementById('myChart');

        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
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
            console.log(response.data) 
        }
    }
}
</script>

<style>

</style>
