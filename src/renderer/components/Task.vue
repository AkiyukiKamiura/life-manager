<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="task in tasks">
        <el-card :body-style="{ padding: '0px' }">
          <div class="task-title">{{ task.name }}</div>
          <img src="~@/assets/ukai.jpg" class="image">
          <div class="bottom clearfix">
            <p class="time" v-if="task.isDone">ended: {{ task.endTime }}</p>
            <p class="time unfinished" v-else>unfinished</p>
            <div class="bottom clearfix" align="center">
              <el-row>
                <el-col :span="12">
                  <el-button @click="changeDoneStatus(task._id, task.isDone)" type="success" icon="el-icon-close" class="task-button" v-if="task.isDone" plain></el-button>
                  <el-button @click="changeDoneStatus(task._id, task.isDone)" type="success" icon="el-icon-check" class="task-button" v-else plain></el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="danger" icon="el-icon-delete" class="task-button" plain></el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'task-page',
    data () {
      return {
        currentDate: new Date().toLocaleString(),
        tasks: ''
      }
    },
    watch: {
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      dbQueryFind: function (findWord) {
        this.$db.taskDB.find({name: new RegExp('.*' + findWord + '.*', 'i')}, function (err, doc) {
          if (err) throw err
          return doc
        })
      },
      changeDoneStatus: function (tid, tisdone) {
        console.log('DoneStatusChanged:' + tisdone)
        var time = new Date().toLocaleTimeString()
        this.$db.taskDB.update({_id: tid}, {$set: {isDone: !tisdone, endTime: time}}, {}, function (err, numReplaced) {
          if (err) throw err
        })
      }
    },
    mounted: function () {
      console.log('mounted')
      this.$db.taskDB.find({}, function (err, doc) {
        if (err) throw err
        this.tasks = doc
      }.bind(this))
      console.log(this.tasks)
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

.task-title {
  margin: 5px;
  color: #666;
  width: 100%;
}

.time {
  color: #4DADA1;
  margin: 0 5px 5px 5px;
}

.time.unfinished {
  color: #DF907C
}

.el-button.task-button {

}
</style>
