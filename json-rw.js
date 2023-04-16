// download data from
// https://www.learningcontainer.com/sample-json-file/
// "Sample JSON file with multiple records download"

const fs = require('fs')
let data, jsobj, users, newData

data = fs.readFileSync('./sample.json')
console.log(data.toString())
jsobj = JSON.parse(data)
//console.log(jsobj)
//console.log(jsobj.users[2])
users = jsobj.Employees
//console.log(users[1].name)
users.map( x => {
    //x.phoneNumber = x.userId.toString().repeat(7)
    // if (x.lastName==="mac") x.lastName="Apple"
    console.log(`${x.firstName} : ${x.phoneNumber}`)
})

newData = JSON.stringify(users)
fs.writeFileSync('./output.json',newData)
console.log('Ok')
