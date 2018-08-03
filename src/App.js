import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <h1>Triple Pundit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graecis hoc modicum est: Leonidas, Epaminondas, tres aliqui aut quattuor; Sed haec in pueris; Duo Reges: constructio interrete. Consequentia exquirere, quoad sit id, quod volumus, effectum. Sed plane dicit quod intellegit. Duarum enim vitarum nobis erunt instituta capienda. Nos paucis ad haec additis finem faciamus aliquando;</p>
          <Footer/>
      </div>
    );
  }
}

export default App;
