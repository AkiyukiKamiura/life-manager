<template>
  <router-link to="/task"><el-button>画面遷移します</el-button></router-link>
</template>

<script>
  export default {
    name: 'personal-summery',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
