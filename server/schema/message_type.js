// Requiring Mongoose and GraphQL to build the message type
const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

// Declaring the message type
const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    user: { type: GraphQLString }
  })
});

module.exports = MessageType;
