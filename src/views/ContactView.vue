<template>
<NavBar />

<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>Contact</span> Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
        </div>
    </div>
</section>

<div class="container">
    <div class="row">
        <div class="contact animate__animated animate__backInDown">
            <h2 class="text-center mb-3">Contact us</h2>
            <p>If you have any questions, do not hesitate to ask them.</p>
            <i class="fa fa-map-marker w3-text-blue mb-2" style="width: 30px"></i>
            Chicago, US<br>
            <i class="fa fa-phone w3-text-blue mb-2" style="width: 30px"></i>
            Phone: +00 151515<br><i class="fa fa-envelope w3-text-blue mb-3" style="width: 30px"> </i>
            Email: mail@mail.com<br>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" aria-label="With textarea" id="message"></textarea>
                </div>
                <button class="btn" type="button">SEND MESSAGE</button>
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
.main {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/pexels-pixabay-326279.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 65vh;
}

.main .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.main .content {
    max-width: 900px;
    text-align: center;
    margin-top: 100px;
}

.main .content h1 {
    font-size: 70px;
    color: #fff;
}

.content span {
    color: #e74c3c;
}

.main .content p {
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
}

.contact {
    margin: 0 auto;
    margin-top: 90px;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
}

.btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}
</style>
