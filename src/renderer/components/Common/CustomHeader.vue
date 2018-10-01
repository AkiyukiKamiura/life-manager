<template>
  <el-row>
    <el-col :span="22">
      <span>Header</span>
    </el-col>
    <el-col :span="2">
      <el-menu class="header-menu" mode="horizontal" align='right'>
        <el-menu-item index="setting" @click="selectedItem"><i class="el-icon-setting"></i></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'CustomHeader',
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    selectedItem (el) {
      if (el.index === 'setting') {
        this.$router.push('/setting')
      }
    }
  }
}
</script>

<style>
.el-icon-setting {
  color: #555;
}

.el-menu.header-menu {
  background: #eee;
}
</style>
