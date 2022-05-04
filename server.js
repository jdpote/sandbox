const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("pipi pipo");
  if (req.method === "POST") {
    console.log(req.headers);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      if (req.headers["content-type"] === "application/json") {
        body = JSON.parse(body);
      }

      console.log(body);
      res.writeHead(201);
      res.end("ok");
    });
  } else {
    res.writeHead(200);
    res.end("hello from my server");
  }
});

console.log("nik ta mere on http://localhost:3000");
server.listen(3000);
