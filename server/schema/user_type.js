const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = graphql;
const MessageType = require('./message_type');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        messages: {
            type: new GraphQLList(MessageType),
            resolve(parentValue) {
              return _.find(messages, { id: args.id });
            }
          }
    }
});

module.exports = UserType;