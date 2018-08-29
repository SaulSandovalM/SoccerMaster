import React, {Component} from 'react';
import LoginComponentE from "./LoginComponentE";
import './Login.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  Footer from '../footer/Footer';
import * as usuarioActions from '../../actions/usuarioActions';
import toastr from 'toastr';
import Nav2 from '../nav/Nav2';
import NavBar2 from '../nav/NavBar2';

const containerStyle = {
  height: '80vh',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
};

class LoginContainerE extends Component {
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
      usuario:{
        email: '',
        password: '',
      }
    };
  }

  loginWithPassword = (e) => {
    e.preventDefault();
    const user = Object.assign({},this.state.usuario);
    console.log(user.email + user.password);
    this.props.usuarioActions.iniciarSesion(user)
    .then( () => {
        this.props.history.push('/torneos-entrenador');
    });
  };

  handleChange = (e) => {
    let usuario = this.state.usuario;
    usuario[e.target.name] = e.target.value;
    this.setState({usuario});
  };

  render(){
    return(
      <div>
        <NavBar2 forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav2 open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <div className="back-login">
          <h1>Bienvenido a Soccer Master <br/> la mejor aplicación <br/> de fútbol Amateur</h1>
          <div className="App" style={containerStyle}>
            <LoginComponentE
              onChange={this.handleChange}
              onSubmit={this.loginWithPassword}
              usuario={this.state.usuario}
            />
          </div>
        </div>
        <div>
          <Footer/>
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

export default connect(mapStateToProps,mapDispatchToProps) (LoginContainerE);
