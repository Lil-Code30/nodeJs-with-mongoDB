import express from "express";
import {
  setPost,
  getPosts,
  editPost,
  deletePost,
  likePost,
  disLikePost,
} from "../controllers/post.controllers.js";

export const router = express.Router();

router.get("/", getPosts);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/post-like/:id", likePost);
router.patch("/post-dislike/:id", disLikePost);
