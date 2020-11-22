/**
 * The GraphQL mutations
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    register(user: UserInput):User
    addProjectIdea(projectIdeaInput: ProjectIdeaInput): ProjectIdea
  }
`;