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

app.get("/exercise", (req, res) => {
  const file = path.join(__dirname, "public", "exercise.html");

  res.sendFile(file);
});

app.get("/stats", (req, res) => {
  const file = path.join(__dirname, "public", "stats.html");

  res.sendFile(file);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
