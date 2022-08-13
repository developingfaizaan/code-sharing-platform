const express = require("express");

const {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
} = require("../controllers/snippet");

const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getSnippets);
router.get("/:id", getSnippet);
router.post("/", auth, createSnippet);
router.patch("/:id", auth, updateSnippet);
router.delete("/:id", auth, deleteSnippet);

module.exports = router;
