import React, { Component } from 'react';
import 'babel-polyfill';
import { Route, Switch } from 'react-router-dom';
import routes from './components/Common/RoutesConfig';
import './components/Common/fontawesome'
import './App.css';

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
