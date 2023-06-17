const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bamphoo's Gym</title>
  </head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  
  <body>
      <header class="header">
          <!-- left for logo -->
          <div class="left">
              <img src="img/logo1.png" alt="">
          </div>
          <!-- midbox for navbar -->
          <div class="mid">
              <ul class="navbar">
                  <li><a href="#" class="active">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Fitness</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div>
          <!-- right box for buttons -->
          <div class="right">
              <button class="btn">
                  Call Us Now
              </button><button class="btn">
                  Email Us
              </button>
          </div>
      </header>
  
      <div class="container">
          <h1>Join the Best Gym</h1>
          <form action="noaction.php">
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your name">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your age">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your gender">
              </div>
              <div class="form-group">
                  <input type="text" name="" placeholder="Enter your locality">
              </div>
              <button class="btn">Submit</button>
          </form>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});