/** 
 * @file server.js 
 * 
 * @overview
 * This file is used to serve the frontend
 */

const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

//to make the stylesheets and client-side js files available 
app.use(express.static(path.resolve("./public")));

// serving the main file at route '/'
app.get("/", (req, res) => {
    res.sendFile(path.resolve('./public/html/index.html'));
});



/******serving the other required files when needed**************/
app.get("/home.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/home.html'));
});

app.get("/status.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/status.html'));
});

app.get("/location.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/location.html'));
});

app.get("/objects.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/objects.html'));
});

app.get("/communication.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/communication.html'));
});

app.get("/communication.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/communication.html'));
});

app.get("/addChild.html", (req, res) => {
    res.sendFile(path.resolve('./public/html/addChild.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve('./public/html/login.html'));
});

/*******************************************************************/

//Starting the server
app.listen(port, () => console.log(`Server listening on port ${port}!`))