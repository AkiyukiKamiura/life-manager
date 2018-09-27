<template>
  <div id="app">
    <el-container>
      <side-menu />
      <!-- export default new Router() で指定したもの -->
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  import SideMenu from './components/Common/SideMenu.vue'

  export default {
    name: 'life_manager',
    components: {
      SideMenu
    }
  }
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
