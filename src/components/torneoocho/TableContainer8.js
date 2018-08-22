import React, {Component} from 'react';
import ShowTable from './Table';
import firebase from '../../firebase';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {message} from 'antd';
import TorneoForm from "./TorneoForm";
import  './Torneo.css';

class TableContainer8 extends Component{

    state = {
        data:[],
        loading:true,
        openForm:false,
        newItem:{captura:''}
    };

    componentWillMount(){
        firebase.database().ref('torneoocho')
            .on('child_added',
                s=>{
                    const {data} = this.state;
                    let item = s.val();
                    item["key"] = s.key;
                    data.push(item);
                    this.setState({data, loading:false});
                });
        firebase.database().ref('torneoocho')
            .on('child_removed',
                s=>{
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



    handleDate = (n, date) => {
        console.log(date);
        //const fecha = Date.parse(date);
        //const laFecha = JSON.stringify(date);
        //console.log(date);
        let newItem = this.state.newItem;
        newItem['fecha'] = date;
        this.setState({newItem});
        console.log(this.state.newItem);
    };

    saveItem = () => {
        let newItem = this.state.newItem;
        newItem['captura'] = Date.now();
        newItem["fecha"] = Date.parse(newItem["fecha"]);
        this.closeForm();
        firebase.database().ref('torneoocho')
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
            <div className='torneo'>
                <h2>Torneo Copa SudAmericana</h2>
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


export default TableContainer8;