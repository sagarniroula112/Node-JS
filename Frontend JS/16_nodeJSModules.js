const fs = require("fs");

let text = fs.readFileSync("info.txt", "utf-8");
console.log("The content of the file is: ");
console.log(text);
text = text.replace("browser", "Rohan");

console.log("Creating a new file: ");
fs.writeFileSync("rohan.txt", text);