import GraphQLClient from "../../Config";

const RawQuery = async (graphQl, variables) => {
    try {
        const QueryResult = await GraphQLClient.query({
            query: graphQl,
            variables: variables
        });
        return QueryResult;
    }
    catch(error){
        console.error(error)
    };
};

export default RawQuery;