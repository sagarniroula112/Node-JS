// Async... Await

// Async... Await is a new way to write asynchronous code.
// To avoid using 'then', we use async... await.

// function abcd(){
//     fetch(`https://randomuser.me/api/`);
//     .then(function(raw){
//         return raw.json();    // data in raw format, now we need to convert
//     })

//     .then(function(data){
//         console.log(data);
//     })
// }

// abcd();

// This above code can be written easily as....
// Whenever a code is async, we need to wait as we don't know when answer is coming, so await.

async function abcd(){   // so now we dont have to use then and catch
    let raw = await fetch(`https://randomuser.me/api/`);  // since it is 'raw' data.
    let ans = await raw.json();
    console.log(ans);
}

// Simply, use "await" to replace .then
