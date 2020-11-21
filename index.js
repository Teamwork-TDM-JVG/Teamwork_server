const  { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require("mongoose");
// create an apollo server instance


    mongoose.connect(
      process.env.MONGODB_CONNECTIONSTRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      }
    );


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // ttps://graphql.org/learn/introspection/
  playground: true,
  context: (({ req }) => {
    // console.log(req);
    return { req }
  })
});

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
