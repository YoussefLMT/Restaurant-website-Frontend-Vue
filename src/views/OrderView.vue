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
