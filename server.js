const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();
const dbURL = require("./config/db").url;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(dbURL, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("Server running"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.use("/api", router);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`We live on http://localhost:${port}`));