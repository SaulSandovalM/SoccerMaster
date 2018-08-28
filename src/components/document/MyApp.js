import React, { Component } from 'react';
import Example from './Example';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';

class MyApp extends Component {
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
        <Example/>
      </div>
    );
  }
}

export default MyApp;
