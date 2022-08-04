import {
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";


const UserType = new GraphQLObjectType({
    name: "User",
    description: "User object Type",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        address: {
            type: GraphQLString,
        },
        age: {
            type: GraphQLInt,
        },
        phone: {
            type: GraphQLString,
        },
        image: {
            type: GraphQLString,
        },
        username: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        },
    }),
});

export default UserType;