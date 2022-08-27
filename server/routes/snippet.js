const express = require("express");

const { getSnippets, getSnippet, createSnippet, updateSnippet, deleteSnippet, profileSnippets } = require("../controllers/snippet");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getSnippets);
router.get("/:id", getSnippet);
router.post("/", createSnippet);
router.patch("/:id", auth, updateSnippet);
router.delete("/:id", auth, deleteSnippet);

router.get("/user/:id", profileSnippets);

module.exports = router;
