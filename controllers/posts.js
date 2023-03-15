const getAllPost = (req, res) => {
  res.send("all post");
};

const createPost = (req, res) => {
  res.send("create post");
};

const getOnePost = (req, res) => {
  res.send("get single post");
};

const updatePost = (req, res) => {
  res.send("update post");
};

const deletePost = (req, res) => {
  res.send("delete post");
};

module.exports = {
  getAllPost,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
};
