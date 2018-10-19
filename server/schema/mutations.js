const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const Message = mongoose.model('message');
const MessageType = require('./message_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMessage: {
      type: MessageType,
      args: {
        content: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: GraphQLString }
      },
      resolve(parentValue, { content, user }) {
        return (new Message({ content, user })).save()
      }
    }
  }
});

module.exports = mutation;
