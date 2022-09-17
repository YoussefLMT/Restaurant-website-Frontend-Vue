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
.box {
    width: 230px;
    margin: 15px;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
}

.box .imgbox {
    position: relative;
    width: 100%;
    height: 180px;
}

.box .imgbox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.box .text {
    padding: 15px 0 0;
    text-align: center;
}
</style>
