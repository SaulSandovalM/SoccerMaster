import React, {Component} from 'react';
import ShowTable from './Table';
import firebase from '../../firebase';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {message} from 'antd';
import './Torneo.css';
import Nav from '../nav/Nav';
import NavBar from '../nav/NavBar';
import TorneoForm from "./TorneoForm";

class TableContainer1 extends Component{
  state = {
    data:[],
    loading:true,
    openForm:false,
    newItem:{captura:''},
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

  componentWillMount(){
    firebase.database().ref('CopaRey')
      .on('child_added', s=>{
        const {data} = this.state;
        let item = s.val();
        item["key"] = s.key;
        data.push(item);
        this.setState({data, loading:false});
      });
    firebase.database().ref('CopaRey')
      .on('child_removed', s=>{
        const {data} = this.state;
        let item = s.val();
        item["key"] = s.key;
        const datas = data.filter(i=>i.key!==item.key);
        this.setState({data:datas});
      })
  }

  openForm = () => {
      this.setState({openForm:true});
    };

  closeForm = () => {
    this.setState({openForm:false});
  };

  onChange = (e) => {
    let newItem = this.state.newItem;
    const field = e.target.name;
    const val = e.target.value;
    newItem[field] = val;
    this.setState({newItem});
    console.log(this.state.newItem)
  };

  saveItem = () => {
    let newItem = this.state.newItem;
    firebase.database().ref('CopaRey/')
      .push(newItem)
      .then(r=>message.success("Se ha guardado con éxito"))
      .catch(e=>message.error("Algo malo pasó, no se pudo guardar"));
  };

  render(){
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.saveItem}
      />,
    ];
    const {data, loading, openForm, newItem} = this.state;
    return(
      <div>
        <NavBar forceClosingDrawer={this.forceClosingDrawer} openDrawer={this.openDrawer}/>
        <Nav open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
        <div className='torneo'>
          <h2>Torneo Copa del Rey</h2>
          <ShowTable loading={loading} data={data} />
          <FloatingActionButton
            style={styles.float}
            onClick={this.openForm}
          >
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            contentStyle={{width:350}}
            title="Agregar nuevo"
            actions={actions}
            modal={false}
            open={openForm}
            onRequestClose={this.closeForm}
          >
          <TorneoForm
            handleDate={this.handleDate}
            newItem={newItem}
            handleSub={this.handleSub}
            handleTipo={this.handleTipo}
            onChange={this.onChange} />
          </Dialog>
        </div>
      </div>
    );
  }
}

const styles = {
  float:{
    position: 'fixed',
    bottom:'100px',
    left:'1100px',
  }
};

export default TableContainer1;
