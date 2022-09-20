<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="meals">
    <h1>Meals</h1>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import { sidebarWidth } from '@/components/sidebarState'
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style scoped>
.meals{
    padding: 20px
}
</style>
