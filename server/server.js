import path from 'path';
import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs'

import App from '../src/App';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from "react-apollo";
import fetch from 'node-fetch';

const app = Express();

app.use(Express.static(path.join(__dirname, '../build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});



app.use((req, res) => {

    const httpLink = createHttpLink({
        uri: 'http://back.3blmedia.com/graphql',
        fetch: fetch
    });

    const client = new ApolloClient({
        ssrMode: true,
        link: httpLink,
        cache: new InMemoryCache(),
    });

    const context = {};
    const appRendered = (
            <ApolloProvider client={client}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </ApolloProvider>
    );


    renderToStringWithData(appRendered).then((root) => {
        const initialState = client.extract();
        //console.log(headTags);

        fs.readFile('./build/index.html', 'utf8', function (err, data) {
            if (err) throw err;
            //console.log(data);
            //console.log('-----------------------------------------');
            //console.log(root);
            //console.log('-----------------------------------------');
            const document = data.replace('<div id="root"></div>', '<div id="root">' + root + '</div>');
            console.log(document);
            res.status(200);
            res.send(document);
            res.end();
        });


        //const html = <Template headTags={headTags} root={root} client={client} />;
        //  res.status(200);
        //  res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        //  res.end();
        //});

    });


});



app.listen(process.env.PORT || 5000);
