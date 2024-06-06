const User = require('./User');
const Project = require('./Post');
const Comment = require('./Comment');
const { on } = require('events');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Comment.belogsTo(Post, {
    foreignKey: 'id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Project, Comment };