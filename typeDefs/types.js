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

  enum Category {
    IT,
    economy,
    social,
    music,
    culture,
    sports,
    shopping,
    local,
  }

  enum TeamFunction {
    designer,
    developer,
    sales,
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
    thumbnail: Image
    email: String
    username: String
    password: String
    linkedin: String
    github: String
  }

  type ProjectIdea {
    id: ID  
    title: String
    description: String
    thumbnail: Image
    team: [User]  # Send all of the teammembers, name etc ...
    author: User
    functions: [TeamFunction]
    category: Category
  }
`;