const fs = require('fs')
const doc = fs.readFileSync('config.json')
var tostring = doc.toString()
var data = JSON.parse(tostring)
console.log(data.config[1].javascript[0].version)

  
getFiles(__dirname)
  .then(files => console.log(files))
  .catch(e => console.error(e));