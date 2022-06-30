// Events Module
// Node.js has a built in module,called "Events",
// where you can create - ,fire-,and listen for- your own events


const EventEmitter = require("events");

const event = new EventEmitter();

// Example 1 - Registering for the event to be fired only one time using once

// event.on('sayMyName',()=>{
//     console.log("Your name is vinod");
// })

// Example 2 - Create an event emitter instance and register a couple of callbacks

// event.on('sayMyName',()=>{
//     console.log("Your name is sukhii");
// })
// event.on('sayMyName',()=>{
//     console.log("Your name is sukhvindra");
// })
// event.emit('sayMyName');

// Example 3 - Registering for the event with callback parameters
event.on('checkPage', (sc, msg) => {
    console.log(`Status Code is ${sc} and the page is ${msg}`);
})
event.emit('checkPage', 200, 'ok');