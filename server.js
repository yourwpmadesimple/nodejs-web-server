const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // Set Header information

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Helllo World</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>method: ${req.method}</p>
            <p>url: ${req.url} </p>
        </body>
        </html>
    `); // Send response back
  })
  .listen(3000);

console.log("Web Server is Listening on Port 3000");
