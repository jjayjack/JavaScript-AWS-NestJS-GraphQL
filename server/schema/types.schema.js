const graphql = require("graphql");

const { GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	description: "Description",
	fields: {}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
