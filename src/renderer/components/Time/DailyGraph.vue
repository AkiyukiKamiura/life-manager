<template>
  <div v-bind:id="'graphArea' + day._id"></div>
</template>

<script>
  export default {
    name: 'daily-graph-page',
    props: ['day'],
    data () {
      return {
      }
    },
    methods: {
      getDurationFromLocaleTime (startTime, endTime) {
        var hour = +endTime.split(':')[0] - +startTime.split(':')[0]
        var minute = +endTime.split(':')[1] - +startTime.split(':')[1]
        return hour * 60 + minute
      },
      drawDailyCharts (targetId) {
        var target = document.getElementById(targetId)

        // OPTIMIZE: events の並び替え 適切な場所で行う
        var events = this.day.events
        events.sort(function (a, b) {
          if (a.startTime < b.startTime) return -1
          if (a.startTime > b.startTime) return 1
          return 0
        })
        var values = []
        var labels = []
        var lastEventTime = '00:00'
        for (let eve of events) {
          var lastDuration = this.getDurationFromLocaleTime(lastEventTime, eve.startTime)
          if (lastDuration !== 0) {
            values.push(lastDuration)
            labels.push('Empty')
          }
          var eventDuration = this.getDurationFromLocaleTime(eve.startTime, eve.endTime)
          // console.log(eve.name + ' - ' + eve.startTime + ' ~ ' + eve.endTime + ' (' + eventDuration + ' min)')
          values.push(eventDuration)
          labels.push(eve.name + ' (' + eve.startTime + ' ~ ' + eve.endTime + ')')
          lastEventTime = eve.endTime
        }
        values.push(this.getDurationFromLocaleTime(lastEventTime, '24:00'))
        labels.push('Empty')

        console.log(values)
        console.log(labels)

        var data = [{
          values: values,
          labels: labels,
          textinfo: 'label',
          showlegend: false,
          sort: false,
          type: 'pie'
        }]

        var layout = {
          margin: {
            t: 50,
            b: 50,
            l: 50,
            r: 75
          }
        }

        window.Plotly.newPlot(target, data, layout)
      }
    },
    mounted: function () {
      this.drawDailyCharts('graphArea' + this.day._id)
    },
    updated: function () {
      this.drawDailyCharts('graphArea' + this.day._id)
    }
  }
</script>
