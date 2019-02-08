import React, { Component } from 'react';
import 'babel-polyfill';
import { Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faSpinner, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import routes from './components/Common/RoutesConfig';
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

    render() {

        return (

            <div className="App">
              {routes.map((route, index) => ( <Route key={index} {...route} /> ))}
            </div>


        );
    }
}

export default App;
