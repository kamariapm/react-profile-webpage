import React, { Component } from 'react';
import Header from './Components/Header';
import Bio from './Components/Bio';
import './App.css';
import Headshot from './Components/Headshot';
import Experience from './Components/Experience';
import ContactPage from './Components/ContactPage';
import NavBarPage from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarPage />
        <Header />
        <Headshot />
        <Bio />
        <Experience />
        <ContactPage />
      </div>
    );
  }
}

export default App;
