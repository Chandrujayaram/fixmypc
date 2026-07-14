const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/get-solution", (req, res) => {
  const { query } = req.body;

  let answer = "Restart your laptop.";

  if (query.toLowerCase().includes("slow")) {
    answer = "Close background apps and clean storage.";
  } else if (query.toLowerCase().includes("wifi")) {
    answer = "Restart router and check drivers.";
  }

  res.json({ answer });
});

module.exports = app;