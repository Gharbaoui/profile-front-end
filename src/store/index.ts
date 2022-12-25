import { createStore } from 'vuex'

export default createStore({
  state: {
    inArticle:false
  },
  getters: {
    get_is_article(state:any) {
      return state.inArticle;
    }
  },
  mutations: {
    update_is_article(state:any, value:boolean) {
      state.inArticle = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
