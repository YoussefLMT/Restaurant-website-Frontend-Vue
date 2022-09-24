import axiosInstance from '../axios'

const OrdersModule = {
    namespaced: true,
    state: {
        user_orders: [],
        loading: false
    },
    getters: {
        userOrders(state) {
            return state.user_orders
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getUserOrders(state, user_orders) {
            state.user_orders = user_orders
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getUserOrders({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-user-orders')
                .then(response => {
                    commit('getUserOrders', response.data.user_orders)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default OrdersModule