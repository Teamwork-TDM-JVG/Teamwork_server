/**
 * The Query Resolvers
 */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server');
const { ProjectIdea } = require("../mongo/models");

module.exports = {
  Query: {
    getAllProjectIdeas: async (parent, params, context) => {
      return await ProjectIdea.find({});
    },
    login: async (parent, { user }, context) => {
      // destructure the user
      const { email, password } = user;

      // validate if the user exists
      const userExists = await User.exists({ email });
      if(!userExists) throw new Error('User does not exist.');

      // get the user
      const foundUser = await User.findOne({ email: email });

      // check if incoming password is equal
      const isEqual = bcrypt.compareSync(password, foundUser.password);
      if(!isEqual) throw new Error('Password is incorrect.');

      // create the webtoken
      const token = jwt.sign(
        { userId: foundUser._id, email: foundUser.email, admin: !!foundUser.admin },
        process.env.TOKEN_SALT,
        { expiresIn: '1h' }
      );

      // return the auth data
      return {
        userId: foundUser.id,
        token,
        admin: !!foundUser.admin
      };
    },

    renewToken: async (parent, {token, id}, context) => {
      if(context.userId === '') throw new AuthenticationError('Must authenticate!');

      const foundUser = await User.findOne({ userId: id });

      // create the webtoken
      const newtoken = jwt.sign(
        { userId: foundUser._id, email: foundUser.email },
        process.env.TOKEN_SALT,
        { expiresIn: '1h' }
      );

      return {
        token: newtoken,
        id: foundUser._id
      };
    },

    user: (parent, { id }, context) => {
      if(context.userId === '') throw new AuthenticationError('Must authenticate!');
      if(!context.admin) throw new AuthenticationError('NOT AUTHORIZED');
      else return User.findOne({ _id: id });
    },

    checkAdmin: (parent, { id }, context) => {
      if(!context.admin) throw new AuthenticationError('NOT AUTHORIZED');
      const userData = User.findOne({ _id: id });
      return userData;
    },
  },
};