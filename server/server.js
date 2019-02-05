import path from 'path';
import Express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs'
import { getRedirect } from "./Redirect";
import { renderToString } from 'react-dom/server';
import { Helmet } from "react-helmet";

import App from '../src/App';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from "react-apollo";
import fetch from 'node-fetch';

const app = Express();

app.use(Express.static(path.join(__dirname, '../build')));

const httpLink = createHttpLink({
    uri: 'https://back.3blmedia.com/graphql',
    fetch: fetch
});

const client = new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache(),
});

// have the server handle only certain paths - the rest, React can handle on the front end.
// first, redirects that begin with the Year.
app.get('/20*', (req, res) => {

    let newurl;

    if (req.path.indexOf('Object]') > 0) {
        res.end();
    }

    // First check if the path is one of the old patterns.
    // if so, try to get a redirect from the appropriate redirect file.
    if (
        req.path.startsWith("/2019/") ||
        req.path.startsWith("/2018/") ||
        req.path.startsWith("/2017/") ||
        req.path.startsWith("/2016/") ||
        req.path.startsWith("/2015/") ||
        req.path.startsWith("/2014/") ||
        req.path.startsWith("/2013/") ||
        req.path.startsWith("/2012/") ||
        req.path.startsWith("/2011/")
    ) {
        newurl = getRedirect(req.path, req.path.substr(1, 4), fs);
    }
    else if (
        req.path.startsWith("/special/") ||
        req.path.startsWith("/series/")
    ) {
        newurl = getRedirect(req.path, 'special', fs);
    }

    // if we have a redirect, go there.
    if (newurl != null) {
        console.log('redirecting to ' + newurl);
        res.redirect(301, newurl);
    }
    else {
        res.redirect(301, "/");
    }

});

// Then, redirects for what are now sponsored series.
// They begin with 'special' or 'series'
app.get('/special/*', (req, res) => {

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
    }
    
    let newurl = getRedirect(req.path, 'special', fs);
    
    // if we have a redirect, go there.
    if (newurl != null) {
        res.redirect(301, newurl);
    }
    else {
        res.redirect(301, "/");
    }

});


app.get('/series/*', (req, res) => {

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
    }
    
    let newurl = getRedirect(req.path, 'special', fs);
    
    // if we have a redirect, go there.
    if (newurl != null) {
        res.redirect(301, newurl);
    }
    else {
        res.redirect(301, "/");
    }

});


// redirect old /writers and /about pages to /editors
app.get('/writers*', (req, res) => {

    if (req.path.indexOf('Object]') > 0) {
        res.end();
    }
    
    let newurl = getRedirect(req.path, 'unique', fs);
    
    // if we have a redirect, go there.
    if (newurl != null) {
        res.redirect(301, newurl);.
    }
    else {
        res.redirect(301, "/");.
    }

});


app.get('/about*', (req, res) => {

    if (req.path.indexOf('Object]') > 0) {
        res.end();
    }
    
    let newurl = getRedirect(req.path, 'unique', fs);
    
    // if we have a redirect, go there.
    if (newurl != null) {
        res.redirect(302, newurl);
    }
    else {
        res.redirect(302, "/");
    }

});


// redirect old /topic/leon-kaye
app.get('/topic*', (req, res) => {

    if (reqpath.indexOf('Object]') > 0) {
        res.end();
    }

    let newurl = getRedirect(req.path, 'unique', fs);

    // if we have a redirect, go there.
    if (newurl != null) {
        res.redirect(301, newurl);
    }
    else {
        res.redirect(301, "/");
    }

});

// Redirect editors
app.get('/author/leon-kaye*', (req, res) => {
  res.redirect(301, '/editor/141/Leon-Kaye');
});

app.get('/author/john-howell*', (req, res) => {
  res.redirect(301, '/editor/36/John-Howell');
});

app.get('/author/mary-mazzoni*', (req, res) => {
  res.redirect(301, '/editor/206/Mary-Mazzoni');
});

// and finally, individual stories pages.
app.get('/story/*', (req, res) => {

    if (req.path.indexOf('Object]') > 0) {
        res.end();
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
        fs.readFile('./build/index.html', 'utf8', function (err, data) {
            if (err) throw err;
            const helmet = Helmet.renderStatic();
            const document = data
                .replace('<div id="root"></div>', `<div id="root">${root}</div>`)
                .replace(/<title>(.*?)<\/title>/, helmet.title.toString())
                .replace('<meta name="helmet">', helmet.meta.toString());
            console.log('SSR: ' + reqpath);
            res.status(200).send(document);
        });
    });

});


// as a default, send anything else through without SSR
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);
