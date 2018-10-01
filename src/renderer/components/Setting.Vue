<template>
  <div>
    <h3>Mysql</h3>
    <ul class='setting-item'>
      <li>
        <p>Host</p>
        <el-input placeholder="please input" v-model="mysql.host"></el-input>
      </li>
      <li>
        <p>Username</p>
        <el-input placeholder="please input" v-model="mysql.host"></el-input>
      </li>
      <li>
        <p>Password</p>
        <el-input placeholder="please input" v-model="mysql.host"></el-input>
      </li>
      <li>
        <p>Database name</p>
        <el-input placeholder="please input" v-model="mysql.host"></el-input>
      </li>
    </ul>
  </div>
</template>

<script>
 let mySQL = require('mysql')
 export default {
   name: 'setting-page',
   data () {
     return {
       name: 'akiyuki kamiura',
       age: '23',
       mysql: {
         host: 'localhost',
         user: 'electron_life',
         password: 'electron_life',
         database: 'life_manager'
       }
     }
   },
   methods: {

   },
   mounted: function () {
     console.log(mySQL)
     let connection = mySQL.createConnection({
       host: 'localhost',
       port: '3306',
       user: 'electron_life',
       password: 'electron_life',
       database: 'life_manager',
       insecureAuth: true
     })
     console.log(connection)
     connection.connect()
     connection.query('SELECT 1 + 1 AS solution', function (err, rsts, fields) {
       if (err) { throw err }
       console.log('The solution is: ', rsts[0].solution)
     })
     connection.end()
   }
 }
</script>

<style>
ul.setting-item {
  list-style-type: none;
  padding-left: 0;
}
</style>
