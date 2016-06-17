"use strict";

//How to create an express server

var http = require("http"),
	express = require("express");

const app = express();

//This a route, establishes config for express. Express not work out of the box
app.get("/", (request, response) => {
	response.end("Hello, World!!");
});

const server = new http.Server(app);

const port = 3000;

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});