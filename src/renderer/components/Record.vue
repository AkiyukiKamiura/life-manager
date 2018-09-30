<template>
  <span>Record</span>
</template>

<script>
  export default {
    name: 'record-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
