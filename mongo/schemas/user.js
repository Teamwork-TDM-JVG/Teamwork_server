const mongoose = require('mongoose');

const ImageSchema = require('./image');

const UserSchema = new mongoose.Schema({
  thumbnail: ImageSchema,
  email: String,
  password: String,
  admin: Boolean,
  linkedin: String,
  github: String,
});

module.exports = UserSchema;