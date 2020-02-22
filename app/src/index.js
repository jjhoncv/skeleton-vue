import Vue from 'vue';
import App from './App'
import router from './router'

import './main.css';

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});
