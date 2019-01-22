import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://back.3blmedia.com/graphql',
});

const client = new ApolloClient({
    ssrForceFetchDelay: 100,
    link: httpLink,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});



ReactDOM.hydrate(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App>
                </App>
            </BrowserRouter>
        </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
