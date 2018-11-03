const scuid = require('scuid');
const faker = require('faker');

var resolvers = {
    Query: {
        user: (parent, { id }) => ({
            id: scuid(), 
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            pwd: faker.internet.password(),
            role: faker.lorem.word()
        }),

        task: (parent, { id }) => ({
            id: scuid(),
            user_id: scuid(),
            label: faker.random.word(),
            description: faker.random.words(),
            why: faker.random.words(),
            weight: faker.random.word(),
            time_estimate: faker.random.number(),
            created_at: faker.date.past(),
            started: faker.date.past(),
            completed: faker.random.boolean(),
            start_deadline_ideal: faker.date.future(),
            start_deadline_late: faker.date.future(),
            paused: faker.random.boolean(),
            disabled: faker.random.boolean(),
            deleted: faker.random.boolean(),
            recurring: faker.random.boolean(),
            parent_id: scuid()
        })
    }
};
module.exports = resolvers;