<template>
<div class="box">
    <div class="imgbox">
        <img :src="image">
    </div>
    <div class="text">
        <h3>{{ name }}</h3>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name'],
}
</script>

<style scoped>
.chef .content .box {
    width: 300px;
    margin: 15px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
}

.chef .content .box .imgbox {
    position: relative;
    width: 100%;
    height: 250px;
}

.chef .content .box .imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.chef .content .box .text {
    padding: 15px 0 5px;
}
</style>
