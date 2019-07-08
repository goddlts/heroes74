// ES6中的模块化的语法，导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'

// 提示当前处在开发模式, false 不提示
Vue.config.productionTip = false

// 导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)

// 导入 HeroList 组件
import HeroList from './views/hero/HeroList.vue'

// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/', redirect: { name: 'hero' } },
    { name: 'hero', path: '/hero', component: HeroList }
  ]
})

new Vue({
  render: createElement => createElement(App),
  // 配置router对象
  router
}).$mount('#app')
