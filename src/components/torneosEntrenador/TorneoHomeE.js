import React, { Component } from 'react';
import TorneoUno from './TorneosEntrenador';
import './Torneo.css';
import Nav2 from '../nav/Nav2';
import NavBar2 from '../nav/NavBar2';

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
      <div>
        <NavBar2 forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav2 open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <TorneoUno/>
      </div>
    );
  }
}

export default TorneoHomeE;
