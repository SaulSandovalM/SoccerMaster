import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import HomeIcon from 'material-ui/svg-icons/action/home';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Resumen from 'material-ui/svg-icons/editor/pie-chart';
import System from 'material-ui/svg-icons/action/credit-card';
import Cart from 'material-ui/svg-icons/editor/monetization-on';
import People from 'material-ui/svg-icons/social/people';
import Face from 'material-ui/svg-icons/action/face';
import Invent from 'material-ui/svg-icons/social/person-add';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.png';
import * as navBarNameActions from '../../actions/navBarNameActions'

class Nav2 extends Component {
  state = {
    active:0
  };

  oddEvent = (num) => {
    //this.setState({active:num});
  };

  changeName = (name) => {
    this.props.navBarNameActions.changeName(name);
  };

  render(){
    //const {oddEvent} = this;
    const {active} = this.state;
    return(
      <div>
      
      </div>
    );
  }
}

const styles = {
  draw:{
    top:'64px',
  },
  active:{
    backgroundColor:'black'
  }
};

function mapStateToProps(state, ownProps) {
  return {
    navBarName: state.navBarName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navBarNameActions: bindActionCreators(navBarNameActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav2);
