var http = require("http");

var hostname = "localhost";
var port = 5000;

var server = http.createServer(function (req, res) {
  console.log(`Request for ${req.url} by method ${req.method}`);

  if (req.method === "GET") {
    var fileUrl = req.url;
    if (fileUrl === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html><body><h1>Home Page.</h1></body></html>`);
      return;
    } else if (fileUrl === "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html><body><h1>About Page.</h1></body></html>`);
      return;
    } else if (fileUrl === "/contact") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
      return;
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
      return;
    }
  }
});

server.listen(port, hostname, function () {
  console.log(`The NodeJS server on port ${port} is now running...`);
});
