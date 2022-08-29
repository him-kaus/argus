const eventEmitter = require("events")

const event = new eventEmitter();

event.on("sayName",()=>{
    console.log('Events ')
})

// sayName();
event.emit("sayName")