const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    trim: true,
    maxLength: [100, "Title can not be more than 100 characters"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
    trim: true,
    maxLength: [100, "Category can not be more than 100 characters"],
    enum: ["ART", "IT", "HISTORY", "FOOTBALL"],
  },
  image: {
    type: String,
    default: "/uploads/example.jpeg",
  },
  content: {
    type: String,
    required: [true, "Please provide product description"],
    maxlength: [3000, "Content can not be more than 3000 characters"],
  },
});
