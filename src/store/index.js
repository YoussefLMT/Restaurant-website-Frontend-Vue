import { createStore } from 'vuex'
import AuthModule from './AuthModule'
import MealsModule from './MealsModule'
import HomeMealsModule from './HomeMealsModule'
import MealDetailsModule from './MealDetailsModule'

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
    homeMeals: HomeMealsModule,
    mealDetails: MealDetailsModule
  }
})
