const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  createdAt: {
    type: Date, 
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    default: Date.now
  },
  tags: {
    type: [String]
  },
  html: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

exports.Post = Post; 