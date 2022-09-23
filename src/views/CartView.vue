<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container mt-5">
    <h3 class="text-center">Walcome in your cart</h3>
    <div>
        <!-- <div class="empty-cart mt-5">
            <div class="row">
                <div class="col-md-">
                    <img src="@/assets/empty_cart.png">
                    <h3>Your cart is currently empty</h3>
                    <router-link to="/shop" class="btn btn-warning mt-3">Return To Shop</router-link>
                </div>
            </div>
        </div> -->
        <router-link to="/order" class="btn btn-primary">Order Now</router-link><br><br>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">

                <div class="box">
                    <div class="imgbox">
                        <img src="@/assets/pexels-pixabay-326279.jpg">
                    </div>
                    <div class="text">
                        <h3>tt</h3>
                        <p>66 DH</p>
                        <button type="button" class="btn-show">Remove</button>
                    </div>
                </div>

            </div>
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

.box {
    width: 250px;
    margin: 20px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.box:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box .imgbox {
    position: relative;
    width: 100%;
    height: 180px;
}

.imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.box .text {
    padding: 10px 0 0px;
    text-align: center;
}

.box .text p {
    color: #e74c3c;
}

.btn-show {
    font-size: 15px;
    color: #fff;
    background: #e74c3c;
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
}

.btn-show:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}
</style>
