<template>
  <el-form ref="form" :model="dayform" label-width="60px">
    <el-form-item label="Name">
      <el-input v-model="dayform.name"></el-input>
    </el-form-item>
    <el-form-item label="Time">
      <el-time-select class="span-time-selector" placeholder="Start time" v-model="dayform.startTime" :picker-options="{ start: '00:00', step: '00:15', end: '24:00'}"></el-time-select>
      <el-time-select class="span-time-selector" placeholder="End time" v-model="dayform.endTime" :picker-options="{ start: '00:00', step: '00:15', end: '24:00', minTime: dayform.startTime}"></el-time-select>
    </el-form-item>
    <el-form-item label="Color">
      <el-color-picker v-model="dayform.color"></el-color-picker>
    </el-form-item>
    <el-form-item>
      <el-button @click="$emit('submit-event', dayform)">Add Event</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'event-form-page',
    data () {
      return {
        dayform: {
          name: '',
          startTime: '',
          endTime: '',
          color: ''
        }
      }
    },
    methods: {
    }
  }
</script>
