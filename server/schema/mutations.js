const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const User = require('../models/user');
const Message = require('../models/message');
const UserType = require('./user_type');
const MessageType = require('./message_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
      }
    },
    addMessage: {
      type: MessageType,
      args: {
        content: { type: GraphQLString },
        userId: { type: GraphQLID }
      },
      resolve(parentValue, { content, userId }) {
      }
    }
  }
});

module.exports = mutation;
