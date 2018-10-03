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

    },
    mounted: function () {
      var target = document.getElementById('graphArea' + this.day._id)
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
