const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.resolve("../public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve('../public/html/index.html'));
});

app.get("/home.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/home.html'));
});

app.get("/status.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/status.html'));
});

app.get("/location.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/location.html'));
});

app.get("/objects.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/objects.html'));
});

app.get("/communication.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/communication.html'));
});

app.get("/communication.html", (req, res) => {
    res.sendFile(path.resolve('../public/html/communication.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))