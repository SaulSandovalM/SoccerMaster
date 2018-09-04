import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import {Table, Icon, Popconfirm, message, Button} from 'antd';
import moment from 'moment';
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
  updates['/CopaAmerica/' + r.key] = null;
  firebase.database().ref().update(updates);
  message.warning("Se ha borrado la liga");
};

const expandedRowRender = record => <p>{record.partido}</p>;
const title = () => '';
const showHeader = true;
const scroll = { y: 240 };

class ShowTable extends Component{
  state = {
    bordered: false,
    //loading: false,
    pagination: false,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
  };

  componentWillMount(){}

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
              <p>{record.partido}<br/>{record.partido1}<br/>{record.partido2}<br/>{record.partido3}<br/>
              {record.partido4}<br/>{record.partido5}<br/>{record.partido6}<br/>{record.partido7}<br/>
              {record.partido8}<br/>{record.partido9}<br/>{record.partido10}<br/>{record.partido11}<br/>
              {record.partido12}<br/>{record.partido13}<br/>{record.partido14}<br/>{record.partido15}<br/>
              {record.partido16}<br/>{record.partido17}<br/>{record.partido18}<br/>{record.partido19}</p>}
          />
        </QueueAnim>
      </div>
    );
  }
}

export default ShowTable;
