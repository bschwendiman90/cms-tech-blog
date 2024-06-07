const router = require('express').Router();
const { Comment,Post, User  } = require('../../models');
const withAuth = require('../../utils/auth');

// Handle form submission
router.post('/', withAuth, async (req, res) => {
  try {
    // Extract postId and text from the request body
    const { postId, text } = req.body;
    
    // Create a new comment
    const newComment = await Comment.create({
      text: text,
      postId: postId,
      userId: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/:id', withAuth, async (req, res) => {
//     const postId = req.params.id;
//     // Fetch post data by ID
//     const post = await Post.findById(postId);
//     res.render('post', { post });
// }
// );

module.exports = router;
