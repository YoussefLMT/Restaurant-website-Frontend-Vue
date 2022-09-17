<template>
<NavBar />

<section class="main">
    <div class="auth-content">
        <form>
            <h2 class="form-title">Register</h2>
            <div class="alert alert-success" v-if="message">
                {{ message }}
            </div>
            <div>
                <label>Name</label>
                <input type="text" v-model="userData.name" class="text-input">
                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
            </div>
            <div>
                <label>Email</label>
                <input type="email" v-model="userData.email" class="text-input">
                <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
            </div>
            <div>
                <label>Password</label>
                <input type="password" v-model="userData.password" class="text-input">
                <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
            </div>
            <div>
                <button type="button" @click="register" class="btn btn-big">Register</button>
            </div>
            <p>Or <router-link to="/login">Login</router-link>
            </p>
        </form>
    </div>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import axiosInstance from '../axios'

export default {
    components: {
        NavBar
    },
    data() {
        return {
            userData: {
                name: '',
                email: '',
                password: ''
            },
            message: '',
            errors: ''
        }
    },
    methods: {
        async register() {
            try {
                const response = await axiosInstance.post("/register", this.userData)
                if (response.data.status === 200) {
                    this.message = response.data.message
                    this.userData.name = ''
                    this.userData.email = ''
                    this.userData.password = ''
                } else {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/pexels-ella-olsson-1640777.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.auth-content {
    width: 460px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    border-radius: 5px;
}

.auth-content .form-title {
    text-align: center;
    margin-bottom: 20px;
}

.auth-content form div {
    margin-bottom: 10px;
}

.auth-content form p {
    text-align: center;
}

.auth-content form p a {
    text-decoration: underline;
}

.text-input {
    padding: 10px 10px;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    outline: none;
    color: #444;
    font-size: 18px;
}

.text-input:focus {
    border: 3px solid #006669;
}

.btn {
    padding: 10px 5px;
    background: #3498db;
    color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.btn-big {
    padding: 10px 10px;
}

.btn:hover {
    color: white;
    background: #005255;
}

@media (max-width: 600px) {
    .auth-content {
        width: 80%;
    }
}
</style>
