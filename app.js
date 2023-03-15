const express = require("express");
const app = express();
require("dotenv").config();

const blog = require("./routes/posts");

const connectDB = require("./db/connect");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/v1/posts", blog);

const port = 3000;

const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`SERVER IS LISTENING ON PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
