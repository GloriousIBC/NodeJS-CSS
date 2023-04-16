const mc = require('./myClass')
//const mu = require('./myUtil')

//const customer = new mc.Human('Andy',mu.getRd(20,50))
const customer = new mc.Human('Andy')
customer.info()

const employee = new mc.Human('Bob',25)
employee.info()