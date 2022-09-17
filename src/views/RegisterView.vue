<template>
<NavBar />

<section class="main">
    <div class="auth-content">
        <form>
            <h2 class="form-title">Login</h2>
            <div>
                <label>Full Name</label>
                <input type="text" class="text-input">
            </div>
            <div>
                <label>Email</label>
                <input type="email" class="text-input">
            </div>
             <div>
                <label>Passwird</label>
                <input type="password" class="text-input">
            </div>
            <div>
                <button type="button" class="btn btn-big">Register</button>
            </div>
            <p>Or <router-link to="#">Login</router-link>
            </p>
        </form>
    </div>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components: {
        NavBar
    },
}
</script>

<style scoped>

</style>
