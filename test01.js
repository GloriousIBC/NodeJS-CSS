const os = require('os');

tmem = os.totalmem(); 
fmem = os.freemem();
console.log(`Total Ram = ${tmem}, Free Ram = ${fmem} and Usage Ram = ${tmem - fmem}`);
console.log(os.hostname());
