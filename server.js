const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "docs")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "docs/index.html"));
});

app.listen(process.env.PORT, () => console.log("just hi"));