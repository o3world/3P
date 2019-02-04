import React, { Component } from 'react';
import 'babel-polyfill';
import { Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import StoriesPage from './components/Stories/StoriesPage';
import SingleStoryPage from "./components/Stories/SingleStoryPage";
import SponsoredSeriesAll from './components/SponsoredSeries/SponsoredSeriesAll';
import SingleSeriesPage from "./components/SponsoredSeries/SingleSeriesPage";
import TheFeedPage from "./components/Feed/TheFeedPage";
import EditorsPage from "./components/Editors/EditorsPage";
import SingleEditorPage from "./components/Editors/SingleEditorPage";
import SeachResult from './components/Search/SearchResults';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faSpinner, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Routes from './components/Common/RoutesConfig';
import './App.css';
import PropTypes from 'prop-types';

library.add( faTwitter, faInstagram, faLinkedin, faSearch, faBars, faSpinner, faEnvelope, faFacebookF, faGoogle, faArrowRight );

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

    static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.handleLocationChange(this.context.router.history.location);
    this.unlisten =
this.context.router.history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleLocationChange(location) {
    console.log(`'${location.pathname}'`);
  }



    render() {

        return (

            <div className="App">
                    <Route exact path={'/'} render={(props) => <Home {...props} newTitle={this.setPageTitle} />}/>
                    <Route path={Routes.THEFEED} render={(props) => <TheFeedPage {...props} />}/>
                    <Route path={Routes.EDITORS} component={EditorsPage}/>
                    <Route path={Routes.SINGLEEDITOR} component={SingleEditorPage}/>
                    <Route exact path={Routes.SPONSOREDSERIESALL} component={SponsoredSeriesAll}/>
                    <Route path={Routes.SINGLESPONSOREDSERIES} component={SingleSeriesPage}/>
                    <Route path={Routes.STORIES} component={StoriesPage}/>
                    <Route path={Routes.SINGLESTORY} component={SingleStoryPage}/>
                    <Route path={Routes.SEARCH} component={SeachResult}/>
            </div>


        );
    }
}

export default App;
