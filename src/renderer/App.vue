<template>
  <div id="app">
    <el-container>
      <side-menu />
      <el-container>
        <el-header class='main-header'>
          <custom-header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <!-- export default new Router() で指定したもの -->
    </el-container>
  </div>
</template>

<script>
  import SideMenu from './components/Common/SideMenu.vue'
  import CustomHeader from './components/Common/CustomHeader.vue'

  export default {
    name: 'life_manager',
    components: {
      SideMenu,
      CustomHeader
    }
  }
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.el-header.main-header {
    background-color: #eee;
    color: #333;
    line-height: 60px;
  }
</style>
