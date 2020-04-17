import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabList:[
      {
        title:"首页",
        imgUrl:require('../assets/mi.png'),
        clickUrl:"/"
      },
      {
        title:"设置",
        imgUrl:require('../assets/set.png'),
        clickUrl:"/set"
      },
      {
        title:"购物车",
        imgUrl:require('../assets/shopcar.png'),
        clickUrl:"/shopcar"
      },
      {
        title:"视图",
        imgUrl:require('../assets/view.png'),
        clickUrl:"/views"
      },
      
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
