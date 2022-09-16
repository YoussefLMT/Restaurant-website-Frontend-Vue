<template>
    <header>
        <nav>
            <div class="logo">
                <img src="@/assets/logo.png">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" to="/">Home</router-link></li>
                <li><router-link class="link" to="/about">About</router-link></li>
                <li><router-link class="link" to="/contact">Contact</router-link></li>
                <li><router-link class="link" to="/login">Login</router-link></li>
            </ul>

            <div class="icon">
                <i @click="toggleNavBar" v-show="mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
            </div>

            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" to="/">Home</router-link></li>
                    <li><router-link class="link" to="/#">About</router-link></li>
                    <li><router-link class="link" to="/#">Contact</router-link></li>
                    <li><router-link class="link" to="/#">Login</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>