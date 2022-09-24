<template>
<Sidebar />

<div :style="{ 'margin-left': sidebarWidth }" class="orders">
    <h1>Update Order Status</h1>
    <div class="card up-order" style="width: 600px;">
        <div class="card-header">
            Orders Managment
        </div>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <form>
                            <label class="mb-3">Select Status</label>
                            <select class="form-select">
                                <option value="pending">pending</option>
                                <option value="in progress">in progress</option>
                                <option value="shipping">shipping</option>
                                <option value="shipped">shipped</option>
                            </select>
                            <button type="button" class="btn btn-primary mt-3">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import {
    sidebarWidth
} from '@/components/sidebarState'
import axiosInstance from '@/axios'

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarWidth,
        }
    },
}
</script>

<style scoped>
.orders {
    padding: 20px;
    transition: 0.3s ease;
}

.me {
    margin: 50px auto;
}

.up-order {
    margin: 0 auto;
    margin-top: 100px;
}
</style>
