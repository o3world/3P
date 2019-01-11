const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server, { path: '/_socket' });
io.set('transports', ['websocket']);

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 5000);
