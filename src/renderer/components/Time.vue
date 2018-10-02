<template>
  <div>
    <div align="right">
      <el-button @click="addDay()">Add Day</el-button>
    </div>
    <el-card :body-style="{ padding: '0px' }" v-for="day in days">
      <el-container>
        <el-header class="card-header">
          <p>{{ currentDate }}</p>
        </el-header>
        <el-main :style="{ padding: '0px' }">
          <el-row>
            <el-col :span="12">
              <div id='graphArea'></div>
              <!-- <img src="~@/assets/ukai.jpg" class="image"> -->
            </el-col>
            <el-col :span="12">
              <el-button>Add Event</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
  let Database = require('nedb')
  let timeDB = new Database({
    filename: './db/dayhistory.json',
    autoload: true
  })

  export default {
    name: 'time-page',
    data () {
      return {
        currentDate: new Date().toLocaleDateString(),
        graphAreaId: 'graphArea',
        days: ''
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      addDay () {
        var date = new Date().toLocaleDateString()
        var newdoc = {'day': date, events: ''}
        timeDB.count({'day': date}, function (err, count) {
          if (err) throw err
          if (count === 0) {
            timeDB.insert(newdoc, function (err, newDoc) {
              if (err) throw err
            })
          } else {
          }
        })
      },
      drawDailyTimeChart () {
        var target = document.getElementById(this.graphArea)
        console.log(target)
        var data = [{
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          textinfo: 'label+value',
          sort: false,
          visible: false,
          type: 'pie'
        }]

        var layout = {
          height: 200,
          width: 200
        }

        window.Plotly.newPlot(target, data, layout)
      }
    },
    mounted: function () {
      // read DB
      timeDB.find({}, function (err, doc) {
        if (err) throw err
        this.days = doc
      }.bind(this))

      console.log('mounted')
    },
    updated: function () {
      var target = document.getElementById('graphArea')
      console.log(target)
      var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        textinfo: 'label+value',
        showlegend: false,
        sort: false,
        type: 'pie'
      }]

      var layout = {
        margin: {
          t: 15,
          b: 15,
          l: 15,
          r: 15
        }
      }

      window.Plotly.newPlot(target, data, layout)
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
