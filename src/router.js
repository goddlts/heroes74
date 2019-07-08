// 路由模块

import Vue from 'vue'

// 导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)

// 导入 HeroList 组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'

// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/', redirect: { name: 'hero' } },
    { name: 'hero', path: '/hero', component: HeroList },
    { name: 'weapon', path: '/weapon', component: WeaponList },
    { name: 'equip', path: '/equip', component: EquipList },
  ]
})

// 导出router对象
export default router