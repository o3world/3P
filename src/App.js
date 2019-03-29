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

  componentWillUpdate({ location, history }) {
    const gtag = window.gtag

    if (location.pathname === this.props.location.pathname) {
      return
    }

    if (history.action === 'PUSH' && typeof(gtag) === 'function') {
      gtag('config', 'GTM-PC3786R', {
        'page_location': window.location.href,
        'page_path': location.pathname,
      })
    }
  };

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
