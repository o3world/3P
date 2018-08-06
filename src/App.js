import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Editors from "./components/Editors/Editors";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
        <ul>
        <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>
      <Header site_title="Triple Pundit"/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          <Footer/>
          <img src={logo} />
  </div>
  </Router>
    );
  }
}

const Home = () => (
    <Editors/>
);

const About = () => (
    <div>
      <h2>About</h2>
    </div>
);

const Topics = () => (
    <div>
      <h3>Topics</h3>
    </div>
);

export default App;
