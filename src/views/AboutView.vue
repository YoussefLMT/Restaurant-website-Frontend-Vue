<template>
<NavBar />

<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>About</span> Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
            <router-link to="#" class="btn">Read More</router-link>
        </div>
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
