const express = require("express");
const router = express.Router();

const { getAllPost } = require("../controllers/blog");

router.route("/").get(getAllPost);

module.exports = router;
