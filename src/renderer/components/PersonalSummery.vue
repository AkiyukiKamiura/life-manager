<template>
  <el-container>
    <el-header>
      <custom-header />
    </el-header>
    <el-main>
      <router-link to="/task">画面遷移します。</router-link>
    </el-main>
  </el-container>
</template>

<script>
  import CustomHeader from './Common/CustomHeader.vue'

  export default {
    name: 'personal-summery',
    components: {CustomHeader},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
