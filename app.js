const express = require("express");
const app = express();

const blog = require("./routes/blog");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/v1/blog", blog);

const port = 3000;

app.listen(port, () => {
  console.log(`SERVER IS LISTENING ON PORT ${port}`);
});
