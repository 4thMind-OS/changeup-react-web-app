const { ApolloServer, gql } = require('apollo-server');
const requireText = require('require-text');
const typeDefs = requireText('./schema.graphql', require);

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});