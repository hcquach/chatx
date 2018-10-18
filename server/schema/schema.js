const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLSchema
} = graphql;

const RootQueryType = require('./root_query_type');

const users = [
     { id: '1', name: 'Hien-Chanh', email: 'hcquach@gmail.com', password: 'topsecret' },
     { id: '2', name: 'Simon', email: 'simon@gmail.com', password: 'topsecret' }
]
module.exports = new GraphQLSchema({
    query: RootQuery
});