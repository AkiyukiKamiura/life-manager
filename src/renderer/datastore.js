import Datastore from 'nedb'
var datastore = {}
datastore = {
  taskDB: new Datastore({autoload: true, filename: './db/tasklist.json'}),
  timeDB: new Datastore({autoload: true, filename: './db/dayhistory.json'})
}
export default datastore
console.log(datastore)
