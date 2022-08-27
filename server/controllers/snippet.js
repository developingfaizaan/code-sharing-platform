const mongoose = require("mongoose");

const Snippet = require("../models/snippet");
const User = require("../models/auth");

const getSnippets = async (req, res, next) => {
  try {
    Snippet.find()
      .populate("postedBy")
      .exec(function (err, snippets) {
        if (err) console.error(err);

        res.json({ error: false, snippets });
      });
  } catch (error) {
    next(error);
  }
};

const getSnippet = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    Snippet.findById(id)
      .populate("postedBy")
      .exec(function (err, snippet) {
        if (err) console.error(err);

        if (!snippet)
          return res.json({
            error: true,
            message: `🔍 No snippet with id: ${id}`,
          });

        res.json({ error: false, snippet });
      });
  } catch (error) {
    next(error);
  }
};

const createSnippet = async (req, res, next) => {
  const { title, description, code, language, postedBy } = req.body;

  const tags = req.body.tags.split(",");

  // TODO: Validate Input
  try {
    const newSnippet = await Snippet.create({
      title,
      description,
      code,
      language,
      postedBy,
      tags,
    });

    res.status(200).json({ error: false, post: newSnippet });
  } catch (error) {
    next(error);
  }
};

const updateSnippet = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, code, language, postedBy, tags } = req.body;

  // TODO: Validate Input

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    const snippet = await Snippet.findById(id);
    if (!snippet) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    const updatedSnippet = {
      title,
      description,
      code,
      language,
      postedBy,
      tags,
      _id: id,
    };

    const newSnippet = await Snippet.findByIdAndUpdate(id, updatedSnippet, {
      new: true,
    });

    res.json({ error: false, newSnippet });
  } catch (error) {
    next(error);
  }
};

const deleteSnippet = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    await Snippet.findByIdAndDelete(id);

    res.json({ error: false, message: "🗑️ Snippet deleted successfully!" });
  } catch (error) {
    next(error);
  }
};

const profileSnippets = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error(`🔍 No user with id: ${id}`);
    }

    const user = await User.findById(id);

    if (!user) {
      res.status(404);
      throw new Error(`🔍 No user with id: ${id}`);
    }

    Snippet.find({ postedBy: id })
      .populate("postedBy")
      .exec(function (err, snippets) {
        if (err) console.error(err);

        res.json({ error: false, snippets, user });
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
  profileSnippets,
};
