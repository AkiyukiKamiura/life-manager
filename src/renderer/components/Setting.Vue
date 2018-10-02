<template>
  <div>
    <!-- <h4 class='setting-title'>Mysql Settings</h4>
    <el-form ref="form" :model="mysql" label-width="120px">
      <el-form-item label="Hostname">
        <el-input v-model="mysql.host"></el-input>
      </el-form-item>
      <el-form-item label="Port">
        <el-input v-model="mysql.port"></el-input>
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="mysql.user"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="mysql.password"></el-input>
      </el-form-item>
      <el-form-item label="Database">
        <el-input v-model="mysql.database"></el-input>
      </el-form-item>
      <el-form-item align='right'>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
 export default {
   name: 'setting-page',
   data () {
     return {
       name: 'akiyuki kamiura',
       age: '23'
     }
   },
   methods: {
   },
   mounted: function () {
     console.log('mounted!')
   }
 }
</script>

<style>
.setting-title {
  color: #555;
  border-bottom: 1px dotted #bbb;
}

.el-form-item {
  width: 75%;
}
</style>
