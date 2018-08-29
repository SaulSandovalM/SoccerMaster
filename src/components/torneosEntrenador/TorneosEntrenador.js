import React, {Component} from 'react';
import {Card, Col, Row, Button, message, Popconfirm, Table, Icon} from 'antd';
import './Torneo.css';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';

class TorneoEntrenador extends Component {
  render() {
    return (
      <div className={"torneohome"}>
      <h1 style={{color: 'white'}}>Selecciona a que torneo pertenecerá tu equipo</h1>
        <div className="catalogo-back" style={{padding: '30px' , width:'900px'}}>

          <Row gutter={16}>
            <Col span={8} style={{backgroundColor:'transparent', borderColor:'none'}}>
              <Card style={{backgroundColor:'#e9ecea'}} >
                <h1 className={"titulo-imagen"}> Copa del Rey </h1>
                <Link to={"/equipos-rey"}>
                  <figure className="snip0015">
                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                    <figcaption>
                      <h2>Lunes </h2>
                      <h2>Liga premier</h2>
                    </figcaption>
                  </figure>
                </Link>
              </Card>
            </Col>

            <Col span={8} style={{ backgroundColor:'transparent', borderColor:'none'}} >
              <Card style={{backgroundColor:'#e9ecea'}}>
                <h1 className={"titulo-imagen"}> Copa América </h1>
                <Link to={"/equipos-america"}>
                  <figure className="snip0015">
                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                    <figcaption>
                      <h2>Martes </h2>
                      <h2>Miércoles</h2>
                    </figcaption>
                  </figure>
                </Link>
              </Card>
            </Col>

              <Col span={8} style={{backgroundColor:'transparent', borderColor:'none'}}>
                <Card style={{backgroundColor:'#e9ecea'}}>
                  <h1 className={"titulo-imagen"}> Copa de oro </h1>
                  <Link to={"/equipos-oro"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Martes </h2>
                        <h2>Miércoles</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8} style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}} >
                  <h1 className={"titulo-imagen"}> Copa libertadores </h1>
                  <Link to={"/equipos-libertadores"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Martes </h2>
                        <h2>Miércoles</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}} >
                  <h1 className={"titulo-imagen"}> Copa Africana </h1>
                  <Link to={"/equipos-africana"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Sábados Juvenil </h2>
                        <h2>SUB 16</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}} >
                  <h1 className={"titulo-imagen"}> Copa Argentina </h1>
                  <Link to={"/equipos-argentina"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Sábados Juvenil </h2>
                        <h2>SUB 22</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8} style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}}>
                  <h1 className={"titulo-imagen"}> Confederaciones </h1>
                  <Link to={"/equipos-confederaciones"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Sábados </h2>
                        <h2>Categoría Libre</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}} >
                  <h1 className={"titulo-imagen"}> Copa SudAmericana </h1>
                  <Link to={"/equipos-sudamericana"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Domingos</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>

              <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                <Card style={{ backgroundColor:'#e9ecea'}} >
                  <h1 className={"titulo-imagen"}> Copa Femenil </h1>
                  <Link to={"/equipos-femenil"}>
                    <figure className="snip0015">
                      <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                      <figcaption>
                        <h2>Domingos</h2>
                      </figcaption>
                    </figure>
                  </Link>
                </Card>
              </Col>
            </Row>
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

export default TorneoEntrenador;
