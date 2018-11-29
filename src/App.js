import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HomePrimeStories from "./components/Home/HomePrimeStories";
import HomeTheFeed from "./components/Home/HomeTheFeed";
import HomeEditors from "./components/Home/HomeEditors";
import PrimeStoryPage from './components/PrimestoryPage/PrimeStoryPage';
import FeedPage from './components/FeedPage/FeedPage';
import Footer from "./components/Footer/Footer";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                  <Route exact path="/" render={(props) => <Home {...props} newTitle={this.setPageTitle} />}/>
                  <Route path="/stories" component={HomePrimeStories}/>
                  <Route path="/the-feed" render={(props) => <HomeTheFeed {...props} newTitle={this.setPageTitle} />}/>
                  <Route path="/editors" component={HomeEditors}/>
                  <Route path="/primestories" component={PrimeStoryPage}></Route>
                  <Route path="/feed" component={FeedPage}></Route>
                  <Footer/>
              </ApolloProvider>
            </div>
        </Router>
    );
  }
}

export default App;
