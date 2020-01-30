const express = require('express');
const router = express.Router();
const { Post } = require('../Models/postModel');

router.post('/', async (req, res) => {
  
  const { title ,createdAt ,tags , html } = req.body;

  const newpost = new Post({
    title, 
    createdAt, 
    tags, 
    html

  });

  try {
   const savedPost = await newpost.save();
   res.json(savedPost);
  } catch (error) {
    console.error(error)
  }

});

router.get('/', async (req, res) => {
  const post = await Post.find();
  res.json(post);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.send(post);
});

module.exports = router; 