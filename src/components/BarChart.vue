<template>
<Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import {
    Bar
} from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import axiosInstance from '@/axios'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'BarChart',
    components: {
        Bar
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 220
        },
        height: {
            type: Number,
            default: 150
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Orders Per Month',
                    backgroundColor: '#1851A8',
                    data: []
                }]
            },
            chartOptions: {
                responsive: true
            },
        }
    },
    mounted() {
        this.getOrdersStatistics()
    },
    methods: {
        async getOrdersStatistics() {
            const response = await axiosInstance.get('/orders-statistics')
            this.chartData.datasets[0].data = response.data.ordersCount.map((c) => c.count)
        }
    }
}
</script>
