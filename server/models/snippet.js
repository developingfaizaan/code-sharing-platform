const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const snippetSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    language: { type: String, required: true },
    postedBy: { type: ObjectId, ref: "User", required: true },
    tags: [String],
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] }
}, { timestamps: true });

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;
