// This is the Root Query


import {
    // These are the basic GraphQL types
    // GraphQLInt,
    // GraphQLFloat,
    GraphQLString,
    // GraphQLList,
    GraphQLObjectType,
    // GraphQLEnumType,

    // This is used to create required fields and arguments
    // GraphQLNonNull,

    // This is the class we need to create the schema
    GraphQLSchema
} from 'graphql';


const Query = new GraphQLObjectType({
    name: 'BlogSchema',
    description: 'Root of the Blog Schema',
    fields: () => ({
        echo: {
            type: GraphQLString,
            description: 'Echo what you enter',
            args: {
                message: {type: GraphQLString}
            },
            resolve: function(source, {message}) {
                return `received ${message}`;
            }
        }
    })
});

// The Schema
const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;