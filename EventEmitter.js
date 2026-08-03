EventEmitter is class
emit("event param"):trigger/create/fire and on("event emit param",callback):listen/subscribe/handle
const EventEmitter = require("events");
const event=new EventEmitter();
event.on("great",()=>{
    console.log("this is event emitter");

})
event.emit("great",()=>{
    console.log("call back function")
});
event.emit("great",()=>{
    console.log("call back function")
});
event.emit("great",()=>{
    console.log("call back function")
});

.1 Create custom event emitter 

const MyEmitter extends EventEmitter{}

const event=new MyEmitter()
event.on("greet",()=>{
    console.log(`hello ${msg}`e literals: `${var}

})
event.emit("great","CSE 21 this fsd class");
