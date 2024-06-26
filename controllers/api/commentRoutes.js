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
      content: text,
      post_id: postId,
      user_id: req.session.user_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

// router.get('/:post_id', withAuth, async (req, res) => {
//   try {
//     const postId = req.params.post_id;

//     // Fetch the post with associated user
//     const post = await Post.findOne({
//       where: { id: postId },
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     if (!post) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     // Fetch comments with associated user
//     const commentData = await Comment.findAll({
//       where: { post_id: postId },
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const comments = commentData.map((comment) => comment.get({ plain: true }));

// const logged_in = req.session.logged_in || false;

//     res.render('comment', { 
//       post: post.get({ plain: true }), 
//       comments ,
//       logged_in
//     });
//   } catch (err) {
//     console.error('Server Error:', err);
//     res.status(500).json(err);
//   }
// });


router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// router.get('/:post_id', withAuth, async (req, res) => {
//   try {
//     const postId = req.params.post_id;
//     const commentData = await Comment.findAll({
//         where: {post_id: postId },
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const comments = commentData.map((comment) => comment.get({ plain: true }));
//     res.render('comment', { comments });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//     const postId = req.params.id;
//     // Fetch post data by ID
//     const post = await Post.findById(postId);
//     res.render('post', { post });
// }
// );

module.exports = router;
