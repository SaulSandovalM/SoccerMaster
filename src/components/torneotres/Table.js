import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message, Button } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../firebase';

const columns = [
  {
    title: "Número de la jornada",
    dataIndex: "names",
    key: "names",
  },
  {
    title: 'Eliminar',
    key: 'action',
    render: (text, record) => (
      <span>
        <span className="ant-divider" />
        <Popconfirm onConfirm={()=>borrarItem(record)} title="¿Estás seguro？" okText="Sí" cancelText="No">
          <a style={{color:'#35a375'}}>Borrar</a>
        </Popconfirm>
        <span className="ant-divider" />
      </span>
    ),
  },
];

const borrarItem = (r) => {
  console.log(r);
  let updates = {};
  updates['/torneotres/' + r.key] = null;
  firebase.database().ref().update(updates);
  message.warning("Se ha borrado");
};

const expandedRowRender = record =>
  <div>
    <p>{record.partidouno}</p>
    <p>{record.partidodos}</p>
    <p>{record.partidotres}</p>
    <p>{record.partidocuatro}</p>
    <p>{record.partidocinco}</p>
  </div>;
const title = () => '';
const showHeader = true;
const scroll = { y: 240 };

class ShowTable extends Component{
  state = {
    bordered: false,
    pagination: false,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
  };

  componentWillMount(){}

  footer = () => {return "el foot"};
  render(){
    const {data, loading} = this.props;
    return(
      <div>
        <QueueAnim>
          <Table
            bordered={true}
            style={{minWidth:'1000px'}}
            {...this.state}
            loading={loading}
            columns={columns}
            dataSource={data}
            expandedRowRender={record =>
              <div>
                <p>Partido: {record.partidouno}</p>
                <p>Partido: {record.partidodos}</p>
                <p>Partido: {record.partidotres}</p>
                <p>Partido: {record.partidocuatro}</p>
                <p>Partido: {record.partidocinco}</p>
              </div>
            }/>
        </QueueAnim>
      </div>
    );
  }
}

export default ShowTable;
