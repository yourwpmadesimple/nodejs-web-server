const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set Header information

    res.end("Hello World"); // Send response back
  })
  .listen(3000);

console.log("Web Server is Listening on Port 3000");
