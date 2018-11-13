import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HomePrimeStories from "./components/Home/HomePrimeStories";
import HomeTheFeed from "./components/Home/HomeTheFeed";
import HomeEditors from "./components/Home/HomeEditors";
import Footer from "./components/Footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add( faTwitter, faInstagram );

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
                <Header site_title={this.state.pageTitle}/>
                <Route exact path="/" render={(props) => <Home {...props} newTitle={this.setPageTitle} />}/>
                <Route path="/stories" component={HomePrimeStories}/>
                <Route path="/the-feed" render={(props) => <HomeTheFeed {...props} newTitle={this.setPageTitle} />}/>
                <Route path="/editors" component={HomeEditors}/>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
