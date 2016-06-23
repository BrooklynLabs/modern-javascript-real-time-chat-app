"use strict";

//How to create an express server

var http = require("http"),
	express = require("express"),
	socketIo = require("socket.io");


const app = express();
app.set("view engine", "jade");

//Example of creating middleware (a function that wraps something in a pipeline)
//browser -> node -> express -> Middleware1 -> Middleware 2 -> handler
//        <-      <-         <-             <-              <- 

//.use() function invokes middleware
app.use((request, response, next) => {
	console.log("--- In middleware 1");
	next();
	console.log("--- Out of middleware 1");
});

// Using built-in middleware to serve out static files -> starts a synchronous request
app.use(express.static("./public"));

app.use((request, response, next) => {
	console.log("--- In middleware 2");
	next(); //.use() will not work if next() is not executed --> needs next to move the pipeline along
	console.log("--- Out of middleware 2");
});

//This a route, establishes config for express. Express not work out of the box
app.get("/", (request, response) => {
	response.end("Hello, World!!");
	console.log("In handler");
});

app.get("/home", (request, response) => {
	// Renders out the view passed in (index) to the view engine. Jade default will look for a "views" folder, so naming is important
	// values on the right equate to those in the jade file
	response.render("index", {title: "TITLE"});
});

const server = new http.Server(app);
//Initialize socket.io with our http server
const io = socketIo(server);

const port = 3000;

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});