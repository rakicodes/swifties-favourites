const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
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
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
});

module.exports = mongoose.model("Song", SongSchema);
