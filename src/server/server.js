const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int
        first_name: String
        last_name: String
        email: String
        pwd: String
        role: String
    }

    type Task {
        id: Int
        user_id: Int
        label: String
        description: String
        why: String
        weight: String
        time_estimate: String
        created_at: String
        started: String
        completed: String
        start_deadline_ideal: String
        start_deadline_late: String
        complete_deadline_ideal: String
        complete_deadline_late: String
        paused: Boolean
        disabled: Boolean
        deleted: Boolean
        recurring: Boolean
        parent_id: String
    }

    type Query {
        user: User
        task: Task
    }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});