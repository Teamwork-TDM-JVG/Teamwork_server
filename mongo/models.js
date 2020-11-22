/**
 * Importing mongoose
 */

const mongoose = require('mongoose');

/**
 * Importing schemas
 */

const UserSchema = require('./schemas/user');
const ProjectIdeaSchema = require('./schemas/projectIdea');

/**
 * Creating mongoose models
 */

const User = mongoose.model('User', UserSchema);
const ProjectIdea = mongoose.model('ProjectIdea', ProjectIdeaSchema);

/**
 * Exporting the models
 */

module.exports = {
  User,
  ProjectIdea,
}