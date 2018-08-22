import React, {Component} from 'react';
import ShowTable from './Table';
import firebase from '../../firebase';
import {message} from 'antd';
import './Goleador.css';

class GoleadorContainer extends Component{
  state = {
    data:[],
    loading:true,
    openForm:false,
    newItem:{captura:'', puntos:'', tipo:''}
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
        <div className='goleador'>
          <h2>Goleadores</h2>
          <ShowTable loading={loading} data={data} />
        </div>
    );
  }
}

export default GoleadorContainer;
