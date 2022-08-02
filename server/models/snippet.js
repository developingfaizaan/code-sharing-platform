const mongoose = require("mongoose");

const snippetSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    description: String,

    code: {
      type: String,
      require: true,
    },

    language: {
      type: String,
      require: true,
    },

    // postedBy: {
    //   type: ObjectId,
    //   ref: 'User',
    // },

    tags: [String],
  },
  { timestamps: true }
);

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;
