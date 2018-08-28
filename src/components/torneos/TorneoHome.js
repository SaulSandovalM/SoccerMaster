import React, { Component } from 'react';
import TorneoUno from './TorneoUno';
import './Torneo.css';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';

class TorneoHome extends Component {
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
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <TorneoUno/>
      </div>
    );
  }
}

export default TorneoHome;
