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
    email: String
    password: String
  }

  input ImageInput {
    url: String!
    alt: String
  }

  input ProjectIdeaInput {
    id: ID
    title: String
    description: String
    team: [String]
  }
`;