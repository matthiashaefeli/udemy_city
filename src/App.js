import React, { Component } from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
      </>
    )
  }
}

export default App;
