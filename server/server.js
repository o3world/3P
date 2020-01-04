import path from 'path';
import Express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs'
import { getRedirect } from "./Redirect";
import { Helmet } from "react-helmet";

import App from '../src/App';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from "react-apollo";
import fetch from 'node-fetch';
import expressSitemapXml from 'express-sitemap-xml'


const app = Express();

// handle redirecting from non-www version to www.
// this must be done before app.use(Express...
app.all('*', function(req, res, next){
    // skip dev or local connections.
    if (req.hostname === 'localhost' || req.hostname === 'node3blmediadev.prod.acquia-sites.com') {
        return next();
    }
    // redirect to www version
                                            // if (!req.hostname.startsWith('www.')) {
                                            //     res.redirect(301, "https://www." + req.headers.host + req.url);
                                            // }
    else { // must return next so processing continues if not redirect.
        return next();
    }
});

app.use(Express.static(path.join(__dirname, '../build')));

// Build sitemap. expressSitemapXml pulls a list of urls from the backend.
async function getUrls() {
    return await fetch('https://back.3blmedia.com/sites/default/files/sitemap.json')
        .then(res => res.json())
        .catch((error) => console.log(`Build sitemap error: ${error}`))
}
 
app.use(expressSitemapXml(getUrls, 'https://www.triplepundit.com'));

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
        console.log(`Redirects with object: ${req.path}`);
        res.status(404).end();
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
        // console.log('redirecting to ' + newurl);
        res.redirect(301, newurl);
    }
    else {
        res.redirect(301, "/");
    }

});

// editors accidentally put some URLs with an incorrect year of 2038 out into the world.
// redirect those to a URL with 2019 instead.
app.get('/story/2038*', (req, res) => {
    let newurl = req.path.replace(/\/2038\//, "/2019/");
    res.redirect(301, newurl);
});

const doRedirect = (redirect_file) => {
  return function(req, res) {

    if (req.path.indexOf('Object]') > 0) {
        console.log(`Story from 2038 with object: ${req.path}`);
        res.status(404).end();
    }

    const newurl = getRedirect(req.path, redirect_file, fs);

    // if we have a redirect, go there.
    if (newurl != null) {
      res.redirect(301, newurl)
    }
    else {
      res.redirect(301, "/")
    }
  }
};

const fetchXMLFile = (remoteXML) => {
    return function(req, res) {
        if (req.path.indexOf('Object]') > 0) {
            console.log(`FetchXMLFile with object: ${req.path}`);
            res.status(404).end();
        }

        fetch(remoteXML)
            .then(xmlData => xmlData.text())
            .then((xmlData)=> {
                fs.readFile('./build/remote.xml', 'utf8', function (err, data) {
                    if (err) throw err;
                    const document = data
                        .replace('<xml></xml>', `${xmlData}`);
                    res.status(200).send(document);
                });
            });
    }
}

// Then, redirects for what are now sponsored series.
// They begin with 'special' or 'series'
app.get('/special/*', doRedirect('special'));
app.get('/series/*', doRedirect('special'));

// redirect old /writers pages to /editors
app.get('/writers*', doRedirect('unique'));

// redirect old About page
app.get('/about*', doRedirect('unique'));

// redirect old /topic/leon-kaye
app.get('/topic*', doRedirect('unique'));

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

app.get('/author/*/101', (req, res) => {
  res.redirect(301, '/author/megan-amrich/556');
});

// and finally, individual stories pages.
app.get('/story/*', (req, res) => {

    if (req.path.indexOf('NaN') > 0) {
        console.log(`NaN: ${req.path}`);
    }

    if (req.path.indexOf('Object]') > 0) {
        console.log(`Story with object: ${req.path}`);
        res.status(404).end();
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
                
            if(!res.headersSent) {
                // console.log('SSR: ' + req.path);
                res.status(200).send(document);
            }
        });
    });

});

app.get('/sitemap-gn.xml', fetchXMLFile('https://back.3blmedia.com/sites/default/files/sitemap-google-news.xml?cache=' + new Date()));

app.get('/rss', fetchXMLFile('https://back.3blmedia.com/sites/default/files/rss-stories-triplepundit.xml?cache=' + new Date()));

// as a default, send anything else through without SSR
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);
