const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    }
});

module.exports = UserType;