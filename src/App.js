import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header site_title="Triple Pundit"/>
        <p>Content</p>
          <Footer/>
      </div>
    );
  }
}

export default App;
