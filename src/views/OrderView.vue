<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container mt-5">
    <div class="row">
        <div class="col-6 mx-auto">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="col">Total Amount</th>
                        <td>{{total_amount}} DH</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-6 mt-5 mx-auto">
            <form>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" v-model="address">
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city" v-model="city">
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="phone">
                </div>
                <button type="button" class="btn">Order</button>
            </form>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import axiosInstance from '@/axios'

export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            total_amount: '',
            address: '',
            city: '',
            phone: ''
        }
    },
    mounted() {
        this.getOrderTotalPrice()
    },
    methods: {
        async getOrderTotalPrice() {
            const response = await axiosInstance.get('/total-price')
            this.total_amount = response.data.total_price
        },
    },
}
</script>

<style scoped>
.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}

.btn {
    font-size: 15px;
    color: #fff;
    background: #e74c3c;
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    border: none;
}

.btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}
</style>
