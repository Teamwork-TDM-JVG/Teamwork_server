/**
 * The Mutation Resolvers
 */
const { ApolloError, AuthenticationError } = require('apollo-server');
const pubsub = require('./pubsub');
const bcrypt = require('bcrypt');
const { projectIdeaSchema } = require('../mongo/schemas/projectIdea');
const { User } = require('../mongo/models');

module.exports = {
  Mutation: {
    createProjectIdea: async (parent, {projectIdeaInput}, context) => {
      const {title, description, team} = projectIdeaInput

      const ProjectIdea = new projectIdeaSchema({
        title,
        description,
        team
      })

      const newProjectIdea = ProjectIdea.save();
      console.log(newProjectIdea);
      return newProjectIdea;
    },

    register: async (parent, { user }) => {
      // destructure user
      const { email, password } = user;

      // validate if the user exists
      const userExists = await User.exists({ email });
      if(userExists) throw new Error('User already exists.')

      // create hash
      const hashedPassword = bcrypt.hashSync(password, 12);

      // create new user
      const newUser = await User.create({
        email,
        password: hashedPassword
      });

      // reset the password for security issues
      newUser.password = null;

      // return the user
      return newUser;
    },
  }
}