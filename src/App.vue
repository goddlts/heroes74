<template>
  <div id="app">
    <!-- 3. 使用AppHeader -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- AppSidebar -->
        <app-sidebar></app-sidebar>
       
        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入AppHeader组件
import AppHeader from './components/AppHeader.vue'
// 导入 AppSidebar 组件
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'app',
  // 2. 注册局部组件
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>
