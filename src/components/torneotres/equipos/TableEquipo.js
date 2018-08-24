import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message, Button } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../../firebase';

const columns = [
  {
    title: "Nombre del equipo",
    dataIndex: "equiponame",
    key: "equiponame",
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    sorter: (a, b) => a.fecha - b.fecha,
    key: 'fecha',
    render: fecha => <span>{moment(fecha).format('LL')}</span>
  }
];

const title = () => '';
const showHeader = true;
const scroll = { y: 240 };

class ShowTable extends Component{
  state = {
    bordered: false,
    pagination: false,
    size: 'default',
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
          />
        </QueueAnim>
      </div>
    );
  }
}

export default ShowTable;
