<template>
  <el-aside class='sidebar' style="background-color: #545c64">
    <div class='bar'></div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="top" @click="selectedItem">ManageDay</el-menu-item>
    <el-menu-item index="task" @click="selectedItem">
      <i class="el-icon-document"></i>
      <span>Task</span>
    </el-menu-item>
    <el-menu-item index="record" @click="selectedItem">
      <i class="el-icon-edit"></i>
      <span>Record</span>
    </el-menu-item>
    <el-menu-item index="time" @click="selectedItem">
      <i class="el-icon-time"></i>
      <span>Time</span>
    </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    selectedItem (el) {
      switch (el.index) {
        case 'top':
          this.$router.push('/')
          break
        case 'task':
          this.$router.push('/task')
          break
        case 'record':
          this.$router.push('/record')
          break
        case 'time':
          this.$router.push('/time')
          break
        default:
          this.$router.push('/')
          break
      }
    }
  }
}
</script>

<style>
.bar {
  width: 100%;
  height: 25px;
}

.el-aside.sidebar {
}
</style>
