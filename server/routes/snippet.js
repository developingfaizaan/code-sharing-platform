const express = require("express");

const {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
} = require("../controllers/snippet");

const router = express.Router();

router.get("/", getSnippets);
router.get("/:id", getSnippet);
router.post("/", createSnippet);
router.patch("/:id", updateSnippet);
router.delete("/:id", deleteSnippet);

module.exports = router;
