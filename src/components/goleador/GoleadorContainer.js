import React, {Component} from 'react';
import ShowTable from './Table';
import firebase from '../../firebase';
import {message} from 'antd';
import './Goleador.css';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';

class GoleadorContainer extends Component{
  openDrawer = () => {
    let {showDrawer} = this.state;
    showDrawer = !showDrawer;
    this.setState({showDrawer});
  };

  forceClosingDrawer = () => {
    this.setState({showDrawer:false})
  };

  state = {
    data:[],
    loading:true,
    openForm:false,
    newItem:{captura:'', puntos:'', tipo:''},
    showDrawer : false
  };

  componentWillMount(){
    firebase.database().ref('goleadores').on('child_added', s=>{
      const {data} = this.state;
      let item = s.val();
      item["key"] = s.key;
      data.push(item);
      this.setState({data, loading:false});
    });
    firebase.database().ref('goleadores').on('child_removed', s=>{
      const {data} = this.state;
      let item = s.val();
      item["key"] = s.key;
      const datas = data.filter(i=>i.key!==item.key);
      this.setState({data:datas});
    })
  }

  render(){
    const {data, loading, openForm, newItem} = this.state;
    return(
      <div>
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <div className='goleador'>
          <h2>Goleadores</h2>
          <ShowTable loading={loading} data={data} />
        </div>
      </div>
    );
  }
}

export default GoleadorContainer;
