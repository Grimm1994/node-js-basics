import EventEmitter from "events";

const customEmmiter = new EventEmitter()

customEmmiter.on("response", (data) => {
    console.log(`data received`, data.name);
})

customEmmiter.on("response", () => {
    console.log(`data received 1`);
})


customEmmiter.emit('response', {name: "grr", age: 12})