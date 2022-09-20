<template>
<div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
        <span v-if="collapsed">
            <div>V</div>
            <div>S</div>
        </span>
        <span v-else>Vue Sidebar</span>
    </h1>

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
        <i class="fas fa-angle-double-left" />
    </span>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
