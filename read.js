const fs = require('fs')
const doc = fs.readFileSync('roles/set_new_user/config.json')
const tostring = doc.toString()
const data = JSON.parse(tostring)
console.log(data.config[0].Rolename)