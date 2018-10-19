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
    user: { type: GraphQLString }
  })
});

module.exports = MessageType;
