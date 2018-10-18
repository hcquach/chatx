const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull
} = graphql;
const UserType = require('./user_type');
const MessageType = require('./message_type');
const _ = require('lodash');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id : { type: GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id });
            }
        },
        message: {
          type: MessageType,
          args: { id: { type: new GraphQLNonNull(GraphQLID) } },
          resolve(parentValue, { id }) {
            return _.find(messages, { id: args.id });
          }
        }
    }
});

module.exports = RootQuery;