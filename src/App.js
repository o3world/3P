import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Editors from "./components/Editors/Editors";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header site_title="Triple Pundit"/>
          <Home/>
          <Footer/>
          <img src={logo} />
      </div>
    );
  }
}

const Home = () => (
    <Editors/>
);

export default App;
