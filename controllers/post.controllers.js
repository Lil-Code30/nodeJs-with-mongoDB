import PostModel from "../models/post.model.js";

// get all posts from the db
export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error occur when getting all posts: ", err.message);
  }
};

// add a new post to the db
export const setPost = async (req, res) => {
  try {
    if (!req.body.message) {
      res.status(400).json({ message: "Merci d'ajouter un message" });
    }

    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error occur when adding a new post: ", err.message);
  }
};

// edit a post from the db
export const editPost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      res.status(400).json({ message: "This post doesn't exist" });
    }

    const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
      new: true,
    });
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error occur when updating the post: ", err.message);
  }
};

//delete post from the db
export const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      res.status(400).json({ message: "This post doesn't exist" });
    }
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message:
        "The post with id " +
        posreq.params.id +
        " has deen remove from the db.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error occur when deleting the post: ", err.message);
  }
};

// like a post in db
export const likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.userId },
      },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Could not like the post : ", err.message);
  }
};

// dislike a post in db
export const disLikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.userId },
      },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Could not like the post : ", err.message);
  }
};
