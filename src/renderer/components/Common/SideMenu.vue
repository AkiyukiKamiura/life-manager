<template>
  <el-aside style="background-color: #545c64">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
    </el-submenu>
    <el-submenu index="3">
    </el-submenu>
    <el-submenu index="4">
    </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>
