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
                        <th scope="col">Amount</th>
                        <td>100DH</td>
                    </tr>
                    <tr>
                        <th scope="col">Shipment</th>
                        <td>50DH</td>
                    </tr>
                    <tr>
                        <th scope="col">Total Amount</th>
                        <td>500DH</td>
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
                    <input type="text" class="form-control" id="address">
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone">
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

export default {
    components: {
        NavBar,
        Footer
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
