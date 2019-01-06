export default {
  state: {
    ads: [
      {title: 'first ad', description: 'Hello i am description', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '123'},
      {title: 'second ad', description: 'Hello i am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '1234'},
      {title: 'Third ad', description: 'Hello i am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '12345'},
      {title: 'Czwarty ad', description: 'Hello i am description', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '123456'}
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }

  },
  actions: {
    createAd ({commit}, payload) {
      const id = Math.floor(Math.random() * 11)
      payload.id = id.toString();
      console.log(payload)

      commit('createAd', payload)

    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    getAdById (store) {
      return adId => store.ads.find(ad => ad.id === adId)
    }

  }
}
