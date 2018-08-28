import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import {Table, Icon, message, Button} from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../firebase';

const columns = [
  {
    title: "Nombre del jugador",
    dataIndex: "nombreplayer",
    key: "nombreplayer",
  },
  {
    title: "Goles hasta el momento",
    dataIndex: "goles",
    key: "goles",
  },
  {
    title: 'Torneo',
    dataIndex: 'tipo',
    onFilter: (value, record) => record.tipo === value,
    key: 'tipo',
    filters: [
      {
        text: 'Copa del Rey',
        value: 'copadelrey',
      }, {
        text: 'Copa America',
        value: 'america',
      }, {
        text: 'Copa Oro',
        value: 'oro'
      },
      {
        text: 'Copa Libertadores',
        value: 'libertadores'
      },
      {
        text: 'Copa Africana',
        value: 'africana'
      },
      {
        text: 'Copa Argentina',
        value: 'argentina'
      },
      {
        text: 'Confederaciones',
        value: 'confederaciones'
      },
      {
        text: 'Copa Sudamericana',
        value: 'sudamericana'
      },
      {
        text: 'Copa Femenil',
        value: 'femenil'
      }
    ],
  },
];

let total = 0;
const footer = () => 'Total: ' + total;
const title = () => '';
const showHeader = true;
const scroll = { y: 240 };

class ShowTable extends Component{
  state = {
    bordered: false,
    //loading: false,
    pagination: true,
    size: 'default',
    title,
    showHeader,
  };

  componentWillMount(){}

  render(){
    const {data, loading} = this.props;
    return(
      <div style={{width: '90%', marginLeft: '5%'}}>
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
