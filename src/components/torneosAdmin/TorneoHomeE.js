import React, { Component } from 'react';
import TorneosAdmin from './TorneosEntrenador';
import './Torneo.css';

class TorneoHomeE extends Component {
  render() {
    return (
      <div>
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <TorneosAdmin/>
      </div>
    );
  }
}

export default TorneoHomeE;
