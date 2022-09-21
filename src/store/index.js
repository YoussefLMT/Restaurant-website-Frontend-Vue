import { createStore } from 'vuex'
import AuthModule from './AuthModule'
import MealsModule from './MealsModule'
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
    meals: MealsModule
  }
})
