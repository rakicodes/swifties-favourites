const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    required: true,
  },
  likesCount: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Album", AlbumSchema);
