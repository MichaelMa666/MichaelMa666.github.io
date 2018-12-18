import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    accessToken: '3f68cd8fe73586b67a00' + '30fd01ab9b6905477fc4',
    moduleGallery: {
      positionX: 0,
      positionY: 0
    },
    moduleArticle: {
      positionX: 0,
      positionY: 0,
      num: '',
      content: '',
      title: '',
      updateTime: '',
      test: 0
    },
    moduleMemo: {
      positionX: 0,
      positionY: 0,
      num: '',
      content: '',
      title: '',
      updateTime: '',
      test: 0
    },
    moduleAbout: {
      positionX: 0,
      positionY: 0
    }
  }
})
