const moongose = require("mongoose");

const connectDB = (url) => {
  return moongose
    .connect(url)
    .then(() => {
      console.log("Connected to the DB");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
