// js is not asynchronous
// callbacks function always executes after an answer is received.
// callbacks are somewhat difficult so they built promises.
// Promises are a way to handle asynchronous operations without the use of callbacks.
// JS is not multithreading. It doesn't do two tasks at once.
// So, asynchronous JS is a dhoka!!
// main stack => execution
// When main stack is empty, the side stack is checked if there is answer. If there is, it is brought to the main stack.
 
console.log("hey");    // sync
console.log('hey2')        // sync
setTimeout(function(){      // async
    console.log('hey3');
}, 0);

console.log('hey4');    // sync
