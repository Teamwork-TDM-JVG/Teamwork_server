/**
 * The GraphQL queries
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    login(user: UserInput):AuthData
    users:[User]
    user(id:ID):User
    checkAdmin(id:ID):AuthData
    renewToken(token: TokenInput):Token
    getProjectIdea(id:ID): ProjectIdea
    getAllProjectIdeas: [ProjectIdea]
    getCategoryProjectIdeas(category: Category): [ProjectIdea]
  }
`;