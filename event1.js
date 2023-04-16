const EventEmitter = require('events')
const em1 = new EventEmitter()
const em2 = new EventEmitter()

//setInterval( () => em1.emit('onesec',{id:1, txt:'One sec..'}), 1000)
setInterval( () => em1.emit('onesec','Hi All'), 1000)
setInterval( () => em1.emit('twosec'), 2000)

em1.on('onesec', (e) => {
    //console.log(e.id + '=' + e.txt)
    console.log(e)
})

// em1.on('twosec', () => {
//     console.log('twosec Event...')
// })

em2.on('onesec', (e) => {
    console.log('From em2')
})