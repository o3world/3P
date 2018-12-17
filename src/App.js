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
import EditorDetailsPage from "./components/Editors/SingleEditorPage";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Routes from './components/Common/RoutesConfig';

const httpLink = createHttpLink({
  uri: 'http://back.3blmedia.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

library.add( faTwitter, faInstagram, faSearch, faBars );

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Home"
        };
        this.setPageTitle = this.setPageTitle.bind(this);
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
                <Route path="/stories" component={StoriesPage}/>
                <Route path={'/the-feed'} render={(props) => <TheFeedPage {...props} />}/>
                <Route exact path="/editors" component={EditorsPage}/>
                <Route path="/editor/:id" component={EditorDetailsPage}/>
                <Route exact path={'/sponsored-series'} component={SponsoredSeriesAll}/>
                <Route path={Routes.THEFEED} render={(props) => <TheFeedPage {...props} />}/>
                <Route path={Routes.EDITORS} component={HomeEditors}/>
                <Route exact path={Routes.SPONSOREDSERIES} component={SponsoredSeriesAll}/>
                <Route path={Routes.SINGLESPONSOREDSERIES} component={""}/>
                <Route path={Routes.STORIES} component={StoriesPage}/>
                <Route path={Routes.SINGLESTORY} component={""}/>
                <Footer/>
              </ApolloProvider>
            </div>
        </Router>
    );
  }
}

export default App;
