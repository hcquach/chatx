// Requiring Mongoose, GraphQL and Message model
const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const MessageType = require('./message_type');
const Message = mongoose.model('message');

// Queries to retrieve the 10 last messages or a specific one from DB
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        messages: {
            type: new GraphQLList(MessageType),
            resolve() {
              return Message.find({}).sort({'_id': -1}).limit(10);
            }
        },
        message: {
          type: MessageType,
          args: { id: { type: new GraphQLNonNull(GraphQLID) } },
          resolve(parentValue, { id }) {
            return Message.findById(id);
          }
        }
    }
});

module.exports = RootQuery;