import { createStore } from 'vuex'
import AuthModule from './AuthModule'
import MealsModule from './MealsModule'
import HomeMealsModule from './HomeMealsModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: AuthModule,
    meals: MealsModule,
    home_meals: HomeMealsModule
  }
})
