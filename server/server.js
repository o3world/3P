import path from 'path';
import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs'
import { getRedirect } from "./Redirect";
import { renderToString } from 'react-dom/server';

import App from '../src/App';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from "react-apollo";
import fetch from 'node-fetch';

import MetaTagsServer from 'react-meta-tags/server';
import {MetaTagsContext} from 'react-meta-tags';

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

app.get('/*', function (req, res) {

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
        res.redirect(301,newurl);
        res.end();
        return;
    }

    // otherwise, render.
    else {



        const context = {};
        const metaTagsInstance = MetaTagsServer();
        const appRendered = (
          <MetaTagsContext extract = {metaTagsInstance.extract}>
            <ApolloProvider client={client}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </ApolloProvider>
          </MetaTagsContext>
        );


        renderToStringWithData(appRendered).then((root) => {
            const initialState = client.extract();
            const meta = metaTagsInstance.getTags();
            const metaString = metaTagsInstance.renderToString();

            console.log(metaString);

            fs.readFile('./build/index.html', 'utf8', function (err, data) {
                if (err) throw err;
                const document = data.replace('<div id="root"></div>', '<div id="root">' + root + '</div>').replace('<head></head>', `<head> ${metaString} </head>`);
                console.log('Server Side Rendered');
                res.status(200);
                res.send(document);
                res.end();
            });


        });
    }

});


app.use(function(req, res, next){
    console.log("INTERCEPT-REQUEST");
    const orig_send = res.send;
    res.send = function(arg) {
        console.log("INTERCEPT-RESPONSE", JSON.stringify(arguments));
        orig_send.call(res, arg);
    };
    next();
});


app.listen(process.env.PORT || 5000);
