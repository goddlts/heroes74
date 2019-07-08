<template>
  <div id="app">
    <h3>我就试试</h3>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 3. 使用组件 -->
    <hero-list></hero-list>
  </div>
</template>

<script>
// 1. 导入组件
import HeroList from './components/HeroList.vue'

export default {
  name: 'app',
  // 2. 注册局部组件
  components: {
    HeroList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
