// Promises

// We write some code, that runs in future.
// So it has two cases: it might run(resolve), or not(reject).
// So we have two functions: resolve and reject.
// This is the world of promises. (We can save it in a variable.)
// Yo variable ma tinta states huna sakxa; pending, resolve, reject.  V.V.Importante!!
// If resolved, the variable is given 'then'. Otherwise, 'catch'.

// var ans = new Promise((res, rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// Here, ans variable can have three states: pending, resolve, reject.

// ans
// .then(()=>{
//     console.log("it is resolved");
// })
// .catch(()=>{
//     console.log("it is rejected");
// })  

// Eg: User will ask for a number between 0 to 9 and if the no
// is below 5, it is resolved. Otherwise, it is rejected.

// let ans = new Promise((res, rej)=>{
//     let num = Math.floor(Math.random()*10);
//     if(num<5){
//         res();
//     }
//     else{
//         rej();
//     }
// })

// ans
// .then(()=>{
//     console.log("Below 5");
// })

// .catch(()=>{
//     console.log("Above 5");
// })

// Tasks

// Eg: Ghar par aao ...1
// gate kholo aur gate lagao...2
// khana pakao khana khao...3
// incognito mode chalao...4
// sojao kyuke tum thakgaye ho...5

let p1 = new Promise(function(res, rej){
    return res("Ghar par aao!");
})

let p2 = p1.then(function(data){  // pahilo async task complete vayoo so yaspaxi yo execute huncha.
    console.log(data);
    return new Promise(function(res, rej){      // Yo!
        return res("Gate kholo aur gate lagao");
    })
})

let p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("Khana pakao khana khao");
    })
})

let p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("incognito mode chalao");
    })
})

let p5 = p4.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("sojao kyuke tum thakgaye ho");
    })
})

