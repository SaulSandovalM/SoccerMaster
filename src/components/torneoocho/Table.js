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
  updates['/CopaSudamericana/' + r.key] = null;
  firebase.database().ref().update(updates);
  message.warning("Se ha borrado la liga");
};

const expandedRowRender = record => <p>{record.equipo1}</p>;
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
              <p>{record.equipo1} vs {record.equipo2}<br/>{record.equipo3} vs {record.equipo4}
              <br/>{record.equipo5} vs {record.equipo6}<br/>{record.equipo7} vs {record.equipo8}
              <br/>{record.equipo9} vs {record.equipo10}<br/>{record.equipo11} vs {record.equipo12}
              <br/>{record.equipo13} vs {record.equipo14}<br/>{record.equipo15} vs {record.equipo16}
              <br/>{record.equipo17} vs {record.equipo18}<br/>{record.equipo19} vs {record.equipo20}
              <br/>{record.equipo21} vs {record.equipo22}<br/>{record.equipo23} vs {record.equipo24}
              <br/>{record.equipo25} vs {record.equipo26}<br/>{record.equipo27} vs {record.equipo26}
              <br/>{record.equipo29} vs {record.equipo30}<br/>{record.equipo31} vs {record.equipo32}
              <br/>{record.equipo33} vs {record.equipo34}<br/>{record.equipo35} vs {record.equipo36}
              <br/>{record.equipo37} vs {record.equipo38}<br/>{record.equipo39} vs {record.equipo40}</p>}
          />
        </QueueAnim>
      </div>
    );
  }
}

export default ShowTable;
