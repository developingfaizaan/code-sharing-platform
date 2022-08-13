const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const snippetSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    code: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    postedBy: {
      // type: String,
      type: ObjectId,
      ref: "User",
      required: true,
    },

    tags: [String],
  },
  { timestamps: true }
);

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;
