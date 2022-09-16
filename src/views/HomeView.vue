<template>
<NavBar />
<section class="main">
    <div class="main-content">
        <div class="content">
            <h1><span>Are</span> you hungry?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed autem voluptate itaque fugit possimus veritatis,
                totam voluptates. Possimus molestias quisquam unde
            </p>
            <a href="#" class="btn">Our Menu</a>
        </div>
    </div>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar
    }
}
</script>
