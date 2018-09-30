<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" v-for="i in [1, 2]">
      <el-container>
        <el-header class="card-header">
          <p>{{ currentDate }}</p>
        </el-header>
        <el-main :style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12">
              <!-- <div id='graphArea'></div> -->
              <img src="~@/assets/ukai.jpg" class="image">
            </el-col>
            <el-col :span="12">
              あいうえおかきくけこ
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'time-page',
    data () {
      return {
        currentDate: new Date().toLocaleDateString(),
        graphArea: '#graphArea',
        hoursOfDay: ['aaa']
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      drawDailyTimeChart () {
        var target = document.getElementById(this.graphArea)
        console.log(target)
      }
    },
    mounted: function () {
      console.log('mounted')
    }
  }
</script>

<style>
el-card,
.card-content {
  padding: 0px;
}

.card-header {
  border-bottom: 1px dashed #eee;
}

.time {
  font-size: 13px;
  color: #999;
}
</style>
