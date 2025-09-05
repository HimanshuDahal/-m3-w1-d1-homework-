var http = require("http");
var path = require("path");
var fs = require("fs");

var hostname = "localhost";
var port = 5000;

var server = http.createServer(function (req, res) {
  console.log(`Request for ${req.url} by method ${req.method}`);

  if (req.method === "GET") {
    var fileUrl = req.url;

    if (fileUrl === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/index.html").pipe(res);
      return;
    } else if (fileUrl === "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/about.html").pipe(res);
      return;
    } else if (fileUrl === "/contact") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./public/contact.html").pipe(res);
      return;
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`
    );
    return;
  }
});

server.listen(port, hostname, function () {
  console.log(`The NodeJS server on port ${port} is now running...`);
});
