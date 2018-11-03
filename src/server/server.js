const { ApolloServer } = require('apollo-server');
const resolvers = require('./data/resolvers');
//const makeExecutableSchema = tools.makeExecutableSchema();
const requireText = require('require-text');
const typeDefs = requireText('./data/schema.graphql', require);
//const schema = makeExecutableSchema({typeDefs});
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});