<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container mt-5">
    <h3>My Orders</h3><br><br>
    <div class="row">
        <div class="col-sm-3">
            <div class="card mb-3" style="width: 18rem;">
                <img class="card-img-top" src="@/assets/cart.png">
                <div class="card-body">
                    <h5 class="card-title">ttt</h5>
                    <p class="card-text">300 DH</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 ml-5">
            <p>Address: tt</p>
            <p>City: tt</p>
            <p class="badge text-bg-warning">Status: tt</p>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
    components: {
        NavBar,
        Footer
    },
    mounted() {
        store.dispatch('orders/getUserOrders')
    },
    computed: {
        userOrders() {
            return store.getters['orders/userOrders']
        },
        loading() {
            return store.getters['orders/loading']
        }
    },
}
</script>

<style scoped>
.navbar {
    background-color: blue;
    padding: 45px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 0px;
}
</style>
