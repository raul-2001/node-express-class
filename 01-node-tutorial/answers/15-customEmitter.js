
const EventEmiter = require('events');
const server = require('http');
const { resolve } = require('path');

const emitter = new EventEmiter();

// first example
const showEmit = async () => {
    console.log("Third")
    return new Promise((resolve) => {
        emitter.on("happens", (msg) => resolve(msg));
    });

};

const setEmitter = async () => {
    console.log("Second")
    const msg = await showEmit();
    console.log("We got an event! Here it is: ", msg);
};
console.log("First")
setEmitter();
console.log("Fouth")
emitter.emit("happens", "Learning events");



// second example
// const startSever = server.createServer();

// startSever.on('request', (req, res) => {


//     if (req.url === '/') {

//         emitter.on('order', (size, weight) => {
//             console.log(`ordered somthing ${size} and ${weight}`);
//             res.end(`Something is ordered ${size} and ${weight}`)
            
//         })

//         console.log("Do work before event accurs in the system!")
//         emitter.emit('order', "large", "heavy");
        
        
//     } else {
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//         `);
//     } 

// });

// startSever.listen(5000);


