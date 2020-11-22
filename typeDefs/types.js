/**
 * The GraphQL types
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  enum Imagetype {
    JPG,
    JPEG,
    jpg,
    jpeg,
    png,
    PNG,
    gif,
    GIF,
    webp,
    WEBP,
    WebP,
    tif,
    tiff,
    bmp,
    eps,
    EPS,
    raw,
    RAW
  }

  type Image {
    url: String!
    alt: String
    # type: Imagetype
  }

  type Token {
    token: String
    id: ID
  }

  type AuthData {
    userId: ID
    token: String
    admin: Boolean
  }

  type User {
    id: ID
    email: String
    password: String
  }

  type ProjectIdea {
    id: ID  
    title: String
    description: String
    team: [String]
    # author: [User]
  }
`;