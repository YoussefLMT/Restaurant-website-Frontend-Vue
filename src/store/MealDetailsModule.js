import axiosInstance from '../axios'

const MealDetailsModule = {
    namespaced: true,
    state: {
        meal: [],
        loading: false
    },
    getters: {
        meal(state) {
            return state.meal
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getMeal(state, meal) {
            state.meal = meal
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getMeal({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/get-meal')
                .then(response => {
                    commit('getMeal', response.data.meal)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default MealDetailsModule