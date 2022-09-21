import axiosInstance from '../axios'

const HomeMealsModule = {
    namespaced: true,
    state: {
        home_meals: [],
        loading: false
    },
    getters: {
        homeMeals(state) {
            return state.meals
        },

        loading(state) {
            return state.loading
        }
    },
    mutations: {
        getHomeMeals(state, home_meals) {
            state.home_meals = home_meals
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getHomeMeals({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/specific-meals')
                .then(response => {
                    commit('getHomeMeals', response.data.home_meals)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },
    },
}

export default HomeMealsModule