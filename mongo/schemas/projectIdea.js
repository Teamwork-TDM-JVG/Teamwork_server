const mongoose = require('mongoose');

const ImageSchema = require('./image');
const UserSchema = require('./user');

const ProjectIdeaSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: ImageSchema,
  team: [UserSchema],
  author: UserSchema,
  functions: [String],
  category: String
});

module.exports = ProjectIdeaSchema;