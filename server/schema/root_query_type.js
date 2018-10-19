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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        messages: {
            type: new GraphQLList(MessageType),
            resolve() {
              return Message.find({});
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