const fs = require("fs");
const http = require("http");

// __________________________  S E R V E R  __________________________ //
// ___________________________________________________________________ //

const server = http.createServer((req, res) => {
  res.end("Hello world!");
});

server.listen(3000, () => {
  console.log("Listening to requests on port 3000 🤖");
});

// ___________________________  F I L E S  ___________________________ //
// ___________________________________________________________________ //

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("FIle has been written!");

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", err => {
//         console.log("The file has been written 😍");
//       });
//     });
//   });
// });
