const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

const MessageType = new GraphQLObjectType({
  name:  'MessageType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    user: {
      type: require('./user_type'),
      resolve(parentValue) {
        return Message.findById(parentValue).populate('user')
          .then(message => {
            console.log(message)
            return message.user
          });
      }
    }
  })
});

module.exports = MessageType;
