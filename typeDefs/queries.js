/**
 * The GraphQL queries
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    login(user: UserInput):AuthData
    user(id:ID):User
    checkAdmin(id:ID):AuthData
    renewToken(token: TokenInput):Token
  }
`;