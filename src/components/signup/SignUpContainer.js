import React, {Component} from 'react';
import SignUpComponent from "./SignUpComponent";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './Registro.css';
import * as usuarioActions from '../../actions/usuarioActions';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';

const containerStyle = {
  height: '85vh',
  width:'100%'
};

class SignUpContainer extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleChangeNewUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let {newUser} = this.state;
    newUser[name] = value;
    this.setState({newUser});
  };

  render() {
    const {newUser} = this.state;
    return (
      <div>
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <div className="registro" style={containerStyle}>
          <h2>REGISTRO DE UN NUEVO ENTRENADOR</h2>
          <div className='registro2'>
            <SignUpComponent
              newUser={newUser}
              onChange={this.handleChangeNewUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    usuario: state.usuario
  }
}

function mapDispatchToProps(dispatch) {
  return {
    usuarioActions: bindActionCreators(usuarioActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (SignUpContainer);
