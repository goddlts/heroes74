<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="txtName" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- button 就是提交按钮 -->
      <!-- <input type="button" value=""> -->
      <!-- prevent 事件修饰符，阻止默认行为 -->
      <button class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

// 组件中获取动态路由中的id  --》 $route.params.id

// 路由规则设置props: true，路由自动把id数据传递给组件
// 组件中接收 props: ['id']

export default {
  props: ['id'],
  data() {
    return {
      // 封装表单数据
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  // 组件加载完毕，根据id请求英雄详情
  mounted() {
    this.getDataById()
  },
  methods: {
    // 根据id获取数据
    getDataById() {
      axios
        .get(`http://localhost:3000/heroes/${this.id}`)
        .then((response) => {
          const { data, status } = response
          if (status === 200) {
            // 获取成功
            this.formData = data
          } else {
            // 获取失败
            alert('获取数据失败')
          }
        })
    }
  }
}
</script>

<style>

</style>
