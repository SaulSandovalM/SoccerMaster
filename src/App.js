import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './components/nav/Nav';
import NavBar from "./components/nav/NavBar";
import {ParallaxProvider} from 'react-scroll-parallax';

class App extends Component {
  state = {
    showDrawer : false
  };

  openDrawer = () => {
    let {showDrawer} = this.state;
    showDrawer = !showDrawer;
    this.setState({showDrawer});
  };

  forceClosingDrawer = () => {
    this.setState({showDrawer:false})
  };

  render() {
    return (
      <ParallaxProvider>
        <div>
          <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
          <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
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
