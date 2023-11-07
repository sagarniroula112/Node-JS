// Callbacks (Always a function, only executes when async task is completed.)

// We are writing async codes if: (sending request)
// fetch, XMLHttpRequest, axios, setTimeout, setInterval, etc.

var ans = fetch(`https://api.github.com/users`); // sending request
console.log(ans); // request is sent, but no idea when response is coming back

// axios
// promises
// setTimeout
// setInterval

// When completed, the answer is here: (receiving response)
// then catch
// callbacks
// async await

