import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HomeEditors from "./components/Editors/HomeEditors";
import StoriesPage from './components/Stories/StoriesPage';
import SponsoredSeriesAll from './components/SponsoredSeries/SponsoredSeriesAll'
import Footer from "./components/Footer/Footer";
import TheFeedPage from "./components/Feed/TheFeedPage";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Routes from './RoutesConfig';

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
                <Route path={Routes.STORIES} component={StoriesPage}/>
                <Route path={Routes.FEED} render={(props) => <TheFeedPage {...props} />}/>
                <Route path={Routes.EDIOTRS} component={HomeEditors}/>
                <Route exact path={Routes.SPONSOREDSERIES} component={SponsoredSeriesAll}/>
                <Footer/>
              </ApolloProvider>
            </div>
        </Router>
    );
  }
}

export default App;
