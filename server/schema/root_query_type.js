const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const UserType = require('./user_type');
const MessageType = require('./message_type');
const User = require('../models/user');
const Message = require('../models/message');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id : { type: GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, args) {
                User.findById(id);
            }
        },
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