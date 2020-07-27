const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8888;

app.use(express.static("public"));

/*
app.get("/", (req, res) => {
  const file = path.join(__dirname, "public", "index.html");

  res.sendFile(file);
});
*/
