import React, { Component } from 'react';
import TorneoUno from './TorneosEntrenador';
import './Torneo.css';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';

class TorneoHomeE extends Component {
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
      <div className="perro">
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <TorneoUno/>
      </div>
    );
  }
}

export default TorneoHomeE;
