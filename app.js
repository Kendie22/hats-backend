const express = require("express");
const cors = require("cors");

const hatsControllers = require("./controllers/hatsControllers");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to the Hats App");
});

app.use("/hats", hatsControllers);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;