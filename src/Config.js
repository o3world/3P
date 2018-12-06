import { ApolloClient } from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://back.3blmedia.com/graphql'
});

const GraphQLClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
export default GraphQLClient;