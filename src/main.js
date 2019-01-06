// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import * as fb from 'firebase'


import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBVvwn2DiyBJ-Yyj6y6p6OV_j48Qh9y4dQ",
  authDomain: "vue-ads-project-72aa7.firebaseapp.com",
  databaseURL: "https://vue-ads-project-72aa7.firebaseio.com",
  projectId: "vue-ads-project-72aa7",
  storageBucket: "vue-ads-project-72aa7.appspot.com",
  messagingSenderId: "852831569868"
}

fb.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
