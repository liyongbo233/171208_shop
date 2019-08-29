import Vue from 'vue'
import APP from './APP.vue'
import router from './router'

new Vue({
    el:'#app',
    render: h => h(APP),
    router,
});
