const express = require("express");

const { getSnippets, getSnippet, searchSnippet, createSnippet, updateSnippet, deleteSnippet, profileSnippets, likeSnippet, commentSnippet } = require("../controllers/snippet");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getSnippets);
router.get("/search", searchSnippet);
router.get("/:id", getSnippet);
router.post("/", createSnippet);
router.patch("/:id", auth, updateSnippet);
router.delete("/:id", auth, deleteSnippet);
router.patch("/:id/like", auth, likeSnippet);
router.patch("/:id/comment", auth, commentSnippet);

router.get("/user/:id", profileSnippets);

module.exports = router;
