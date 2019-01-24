import path from 'path';
import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs'
import { getRedirect } from "./Redirect";

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

//console.log(reqpath);
const httpLink = createHttpLink({
    uri: 'http://back.3blmedia.com/graphql',
    fetch: fetch
});

const client = new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache(),
});

// have the server handle only certain paths - the rest, React can handle on the front end.
// first, redirects that begin with the Year.
app.get('/20*', function (req, res) {

    var reqpath = req.path;
    console.log(reqpath);

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
        return;
    }

    // First check if the path is one of the old patterns.
    // if so, try to get a redirect from the appropriate redirect file.
    if (
        reqpath.startsWith("/2018/") ||
        reqpath.startsWith("/2017/") ||
        reqpath.startsWith("/2016/") ||
        reqpath.startsWith("/2015/") ||
        reqpath.startsWith("/2014/") ||
        reqpath.startsWith("/2013/") ||
        reqpath.startsWith("/2012/") ||
        reqpath.startsWith("/2011/")
    ) {
        var newurl = getRedirect(req.path, reqpath.substr(1, 4), fs);
    }
    else if (
        reqpath.startsWith("/special/") ||
        reqpath.startsWith("/series/")
    ) {
        var newurl = getRedirect(req.path, 'special', fs);
    }

    // if we have a redirect, go there.
    if (newurl != null) {
        console.log('redirecting to ' + newurl);
        res.redirect(301, newurl);
        res.end();
        return;
    }
    else {
        res.redirect(301, "/");
        res.end();
        return;
    }

});

// Then, redirects for what are now sponsored series.
// They begin with 'special' or 'series'
app.get('/special/*', function (req, res) {

    var reqpath = req.path;
    console.log(reqpath);

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
        return;
    }


    var newurl = getRedirect(req.path, 'special', fs);


    // if we have a redirect, go there.
    if (newurl != null) {
        console.log('redirecting to ' + newurl);
        res.redirect(301, newurl);
        res.end();
        return;
    }
    else {
        res.redirect(301, "/");
        res.end();
        return;
    }

});


app.get('/series/*', function (req, res) {

    var reqpath = req.path;
    console.log(reqpath);

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
        return;
    }


    var newurl = getRedirect(req.path, 'special', fs);


    // if we have a redirect, go there.
    if (newurl != null) {
        console.log('redirecting to ' + newurl);
        res.redirect(301, newurl);
        res.end();
        return;
    }
    else {
        res.redirect(301, "/");
        res.end();
        return;
    }

});


// and finally, individual stories pages.
app.get('/story/*', function (req, res) {

    var reqpath = req.path;
    console.log(reqpath);

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
        return;
    }

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

            fs.readFile('./build/index.html', 'utf8', function (err, data) {
                if (err) throw err;
                const document = data.replace('<div id="root"></div>', '<div id="root">' + root + '</div>');
                console.log('Server Side Rendered');
                res.status(200);
                res.send(document);
                res.end();
            });


        });

});

// as a default, send anything else through without SSR
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



app.listen(process.env.PORT || 5000);
