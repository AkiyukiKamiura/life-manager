<template>
  <el-container>
    <el-header>
      <custom-header />
    </el-header>
    <el-main>
      <router-link to="/">画面遷移成功！</router-link>
    </el-main>
  </el-container>
</template>

<script>
  import CustomHeader from './Common/CustomHeader.vue'

  export default {
    name: 'task-page',
    components: {CustomHeader},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
