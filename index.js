const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send("Testing Docker!!!");
});

app.listen(8080, () => console.log("Server is Running!"));
