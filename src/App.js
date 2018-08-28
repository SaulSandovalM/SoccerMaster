import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './components/nav/Nav';
import NavBar from "./components/nav/NavBar";
import {ParallaxProvider} from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div>
          <div className="routes-container App">
            <Routes />
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

const styles = {
  container:{
    marginLeft:'22%'
  }
};

export default (App);
