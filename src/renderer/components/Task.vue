<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="i in [1, 2, 3, 4]">
      <el-card :body-style="{ padding: '0px' }">
        <img src="~@/assets/ukai.jpg" class="image">
        <span class="title">あいちゃん</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <div class="bottom clearfix">
            <el-button type="success" icon="el-icon-check" plain></el-button>
            <el-button type="danger" icon="el-icon-delete" plain></el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'task-page',
    data () {
      return {
        currentDate: new Date().toLocaleString(),
        tasks: []
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.el-card {
  margin-bottom: 20px
}

.el-card img{
  width: 100%;
}

.time {
  font-size: 13px;
  color: #999;
}
</style>
