const MealsModule = {
    namespaced: true,
    state: {
        meals: [],
        loading: false

    },
    getters: {
        meals(state) {
            return state.meals
        },
    },
    mutations: {
        getMeals(state, meals) {
            state.meals = meals
        },

        setLoading(state, loading) {
            state.loading = loading
        },
    },
    actions: {
        getMeals({ commit }) {
            commit('setLoading', true)

            axiosInstance.get('/meals')
                .then(response => {
                    commit('getMeals', response.data.meals)
                    commit('setLoading', false)
                })
                .catch(error => console.log(error))
        },

    },
}

export default MealsModule