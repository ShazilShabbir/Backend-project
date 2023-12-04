require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Shazil");
});

app.get("/login", (req, res) => { 
    res.send( 'How are you')
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`);
});
