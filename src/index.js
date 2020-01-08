import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'https://back-stage.3blmedia.com/graphql',
});

const client = new ApolloClient({
    ssrForceFetchDelay: 100,
    link: httpLink,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const routeChangeHandler = (previousRoute, nextRoute) => {
  var PARSELY = {
	  onLoad: function() {
		  PARSELY.beacon.trackPageView({
			url: nextRoute,
			urlref: previousRoute,
			js: 1
		  })
	  }
  }
};

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter onChange={routeChangeHandler}>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
