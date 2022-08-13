const mongoose = require("mongoose");

const Snippet = require("../models/snippet");

const getSnippets = async (req, res, next) => {
  try {
    const snippets = await Snippet.find();

    if (snippets.length === 0) {
      res.status(204).json({
        error: false,
        message: "🔍 There are no snippets.",
      });
    }

    res.status(200).json({
      error: false,
      snippets,
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

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      res.status(404);
      throw new Error(`🔍 No snippet with id: ${id}`);
    }

    res.json({ error: false, snippet });
  } catch (error) {
    next(error);
  }
};

const createSnippet = async (req, res, next) => {
  const { title, description, code, language, postedBy, tags } = req.body;

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

    res.status(200).json({
      error: false,
      post: newSnippet,
    });
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

module.exports = {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
