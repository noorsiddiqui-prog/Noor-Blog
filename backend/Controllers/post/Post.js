const PostSchema = require("../../Model/post/post.js");

const CreatePost = async (res, req) => {
  // const { title, description, postType, date } = req.body;
  // const { image } = req.file.filename;
  console.log(req.body);

  try {
    // const data = PostSchema(req.body)
    const data = await PostSchema(req.body);
    await data.save().then((used) => {
      res.status(200).json(used);
    });
  } catch (error) {
    // res.status(500);
    console.log("Failed to Post", error);
  }
};
const getPost = async (res, req) => {
  try {
    await PostSchema.find();
  } catch (error) {
    // res.status(500);
    console.log("Failed to get Post", error);
  }
};

module.exports = { CreatePost, getPost };
