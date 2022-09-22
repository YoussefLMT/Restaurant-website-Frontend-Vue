<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="dashboard">
    <h1>Dashboard</h1>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'
export default {
    components: {
        Sidebar
    },
    setup() {
        return {
            sidebarWidth
        }
    }
}
</script>

<style scoped>
.dashboard {
    padding: 20px;
    transition: 0.3s ease;
}
</style>
