let pi = 3.14
const users = {name:'John', age:30}

function getRandom(min=0, max=0) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//module.exports.circleArea = function circleArea(r) {
//exports.circleArea = function circleArea(r=1) {
//exports.circleArea = function (r=1) {
exports.circleArea = (r=1) => {
    return pi*r**2;
}

module.exports.getRd = getRandom
//module.exports.pi = pi
//module.exports.circleArea =  circleArea
module.exports.user = user