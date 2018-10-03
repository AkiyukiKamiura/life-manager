<template>
  <div>
    <div align="right">
      <el-button @click="addDay()">Add Day</el-button>
    </div>
    <el-card :body-style="{ padding: '0px' }" v-for="day in days">
      <el-container>
        <el-header class="card-header">
          <p class='daily-title'>Daily Summery: {{ day.day }}</p>
        </el-header>
        <el-main :style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12">
              <daily-graph :day="day" />
            </el-col>
            <el-col :span="12">
              <div class='card-content'>
                <event-form v-on:submit-event="onSubmitEvent" />
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
  import EventForm from './Time/EventForm.vue'
  import DailyGraph from './Time/DailyGraph.vue'

  export default {
    name: 'time-page',
    components: {
      EventForm,
      DailyGraph
    },
    data () {
      return {
        days: '',
        startTime: '',
        endTime: '',
        form: ''
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      addDay () {
        var date = new Date().toLocaleDateString()
        var newdoc = {'day': date, events: ''}
        this.$db.timeDB.count({'day': date}, function (err, count) {
          if (err) throw err
          if (count === 0) {
            this.$db.timeDB.insert(newdoc, function (err, newDoc) { if (err) throw err })
          }
        })
      },
      onSubmitEvent (dayform) {
        // name: '',
        // startTime: '',
        // endTime: '',
        // color: ''
        console.log(dayform.name)
        console.log(dayform.startTime)
        console.log(dayform.endTime)
        console.log(dayform.color)

        var tid = ''
        var targetDay = this.dbFindById(tid)
        console.log(targetDay)
      },
      // DB Utility
      dbFindById (tid) {
        this.$db.timeDB.findOne({_id: tid}, function (err, doc) {
          if (err) { throw err }
          return doc
        })
      },
      // Graph Setting
      drawDailyTimeChart (graphAreaID, timeId) {
        var target = document.getElementById(graphAreaID)
        var day = this.dbFindById(timeId)
        var events = day.events
        console.log(target)
        console.log(events)
      }
    },
    mounted: function () {
      this.$db.timeDB.find({}, function (err, doc) {
        if (err) throw err
        this.days = doc
      }.bind(this))
      console.log(this.days)
    },
    updated: function () {
      // updated
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

p.daily-title {
  color: #555;
  font-size: 20px;
}

div.card-content {
  display:inline-block;
  vertical-align: middle;
}
</style>
