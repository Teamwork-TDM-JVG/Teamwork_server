/**
 * The GraphQL inputs
 */

const  { gql } = require('apollo-server');

module.exports = gql`

  input TokenInput {
    token: String
    id: ID
  }

  input UserInput {
    username: String
    email: String
    password: String
    github: String
    linkedin: String
  }

  input ImageInput {
    url: String!
    alt: String
  }

  input ProjectIdeaInput {
    title: String
    description: String
    team: [ID]    # Only give in ID's of teammembers
    functions: [TeamFunction]   # Gives all of the possible available team functions
    category: Category
  }
`;