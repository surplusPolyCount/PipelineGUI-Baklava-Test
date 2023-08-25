// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// in your main.js
import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue";
import "@baklavajs/plugin-renderer-vue/dist/styles.css";
Vue.use(BaklavaVuePlugin);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


