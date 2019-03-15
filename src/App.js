import React, { Component } from 'react';

import Splash from './components/splash';
import Footer from './components/footer';
import NavBarContainer from './components/navbar_container';
import "./components/splash.scss";

import './App.css';

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBarContainer/>
      <Splash/>
      <Footer/>

      </div>

    )
  }
}

export default App;
