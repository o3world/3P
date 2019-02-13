import React, { Component } from 'react';
import 'babel-polyfill';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars, faSpinner, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import routes from './components/Common/RoutesConfig';
import './App.css';

library.add( faTwitter, faInstagram, faLinkedin, faSearch, faBars, faSpinner, faEnvelope, faFacebookF, faGoogle, faArrowRight );

class App extends Component {

    render() {

        return (

            <div className="App">
              <Switch>
              {routes.map((route, index) => ( <Route key={index} {...route} /> ))}
              </Switch>
            </div>


        );
    }
}

export default App;
