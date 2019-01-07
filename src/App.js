import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import StoriesPage from './components/Stories/StoriesPage';
import SponsoredSeriesAll from './components/SponsoredSeries/SponsoredSeriesAll';
import SingleSeriesPage from "./components/SponsoredSeries/SingleSeriesPage";
import Footer from "./components/Footer/Footer";
import TheFeedPage from "./components/Feed/TheFeedPage";
import EditorsPage from "./components/Editors/EditorsPage";
import SingleEditorPage from "./components/Editors/SingleEditorPage";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Routes from './components/Common/RoutesConfig';
import SingleStoryPage from "./components/Stories/SingleStoryPage";

var socket = io('socketiodev.vhalencar12.sites.ahdev.co', { path: '/_socket', transports: ['websocket'] });

const httpLink = createHttpLink({
  uri: 'http://back.3blmedia.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

library.add( faTwitter, faInstagram, faSearch, faBars, faSpinner );

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Home"
        };
        this.setPageTitle = this.setPageTitle.bind(this);
        this.connecToServer = this.connecToServer.bind(this);
    }
    connecToServer() {
      fetch('/');
    }

    componentDidMount() {
      this.connecToServer();
    }

    setPageTitle(title) {
        this.setState({pageTitle: title});
    }


  render() {
    return (
        <Router>
            <div className="App">
              <ApolloProvider client={client}>
                <Header site_title={this.state.pageTitle}/>
                <Route exact path={'/'} render={(props) => <Home {...props} newTitle={this.setPageTitle} />}/>
                <Route path={Routes.THEFEED} render={(props) => <TheFeedPage {...props} />}/>
                <Route path={Routes.EDITORS} component={EditorsPage}/>
                <Route path={Routes.SINGLEEDITOR} component={SingleEditorPage}/>
                <Route exact path={Routes.SPONSOREDSERIESALL} component={SponsoredSeriesAll}/>
                <Route path={Routes.SINGLESPONSOREDSERIES} component={SingleSeriesPage}/>
                <Route path={Routes.STORIES} component={StoriesPage}/>
                <Route path={Routes.SINGLESTORY} component={SingleStoryPage}/>
                <Footer/>
              </ApolloProvider>
            </div>
        </Router>
    );
  }
}

export default App;
