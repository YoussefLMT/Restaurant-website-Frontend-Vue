import axiosInstance from '../axios'

const CartModule = {
    namespaced: true,
    state: {
        cart_meals: [],
        loading: false
    },
    getters: {
        cartMeals(state) {
            return state.cart_meals
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getCartMeals(state, cart_meals) {
            state.cart_meals = cart_meals
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getCartMeals({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-cart-meals')
                .then(response => {
                    commit('getCartMeals', response.data.cart_meals)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default CartModule