// Making a request with the GET method
const https = require("https");
const fs = require("fs");

// First argument (url)
// Second argument ()
const request = https.get(
  "https://en.wikipedia.org/wiki/Charlie_Brown",
  (res) => {
    let download = fs.createWriteStream("./Charlie_Brown.html"); // Wriatable file stream
    res.pipe(download); // Readable file stream

    res.on("end", () => {
      // Listen for the end of download
      console.log("Response Finished: Wiki page downloaded");
    });
  }
);
request.end();
