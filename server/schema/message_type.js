const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;
const Message = require('../models/message');

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    user: {
      type: require('./user_type'),
      resolve(parentValue) {
        return Message.findById(parentValue).populate('user')
          .then(message => {
            return message.user
          });
      }
    }
  })
});

module.exports = MessageType;
