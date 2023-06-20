// ROUTING

const url = require('url');
const fs = require('fs');
// Creating Simple Web Server................2

const http = require('http');

const data = fs.readFile(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res)=>{
    const pathname = req.url;
    if(pathname === '/' || pathname ==='/overview'){
        res.end("This is overview.");
    }

    else if(pathname === '/api'){
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
    }

    else if(pathname==='/product'){
        res.end("This is product page.")
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('<h1>Page not found!</h1>');
    }
    
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening on port 8000.");
});




// Asynchronous And Synchronous Code............1

// const fs = require('fs');

// Blocking OR Synchronous code
// const hello = fs.readFileSync('read-this.txt', 'utf-8');
// console.log(hello);
// fs.writeFileSync('output.txt', hello);


// Non blocking OR Asynchronous Code

// fs.readFile('start.txt', 'utf-8', (err, data1)=>{
//     fs.readFile(`${data1}.txt`, 'utf-8', (err, data2)=>{
//         console.log(data2);
//         fs.readFile('append.txt', 'utf-8', (err, data3)=>{
//             console.log(data3);

//             fs.writeFile('output.txt', `${data2}\n${data3}`, 'utf-8', err =>{
//                 console.log("File is written!");
//             });
//         });
//     });
// });

///////////////////////////////////////////////////////////////////

// Creating your own server

