<template>
<div class="navbar">
    <NavBar />
</div>

<div class="container">
    <div class="row">
        <div class="contact">
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
.contact {
    margin: 0 auto;
    margin-top: 90px;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

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
}

.btn:hover {
    background: hsl(6, 84%, 34%);
    border: none;
}
</style>
