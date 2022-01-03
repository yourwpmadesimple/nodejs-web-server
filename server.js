const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (res, status, type, filePath) => {
  res.writeHead(status, { "Content-Type": type });
  createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      console.log(body);
    });
  }

  switch (req.url) {
    case "/":
      return sendFile(res, 200, "text/html", "./home-page.html");
    case "/contact":
      return sendFile(res, 200, "text/html", "./contact.html");
    case "/img/wayne.jpg":
      return sendFile(res, 200, "image/jpg", "./img/wayne.jpg");
    case "/styles.css":
      return sendFile(res, 200, "text/css", "./styles.css");
    default:
      return sendFile(res, 200, "text/html", "./404.html");
  }
}).listen(8000);

console.log("Wayne's website running on port 8000");
