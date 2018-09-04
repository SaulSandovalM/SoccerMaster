import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import './Torneo.css';

class TorneoForm extends Component{
  render(){
    const {newItem} = this.props;
    return(
      <div className="formulario">
        <TextField
          value={newItem.names}
          type="text"
          name="names"
          hintText="Jornada 1"
          floatingLabelText="Número de la Jornada"
          onChange={this.props.onChange}
        />
        <p>Partidos</p>
        <div className="teamrow">
          <TextField
            value={newItem.equipo1}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo1"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo2}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo2"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo3}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo3"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo4}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo4"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo5}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo5"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo6}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo6"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo7}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo7"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo8}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo8"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo9}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo9"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo10}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo10"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo11}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo11"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo12}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo12"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo13}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo13"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo14}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo14"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo15}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo15"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo16}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo16"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo17}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo17"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo18}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo18"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo19}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo19"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo20}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo20"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo21}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo21"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo22}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo22"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo23}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo23"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo24}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo24"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo25}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo25"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo26}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo26"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo27}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo27"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo28}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo28"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo29}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo29"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo30}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo30"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo31}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo31"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo32}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo32"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo33}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo33"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo34}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo34"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo35}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo35"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo36}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo36"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo37}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo37"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo38}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo38"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
        <div className="teamrow">
          <TextField
            value={newItem.equipo39}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo39"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px', height: '50px'}}
          />
          vs
          <TextField
            value={newItem.equipo40}
            multiLine={true}
            rows={1}
            type="text"
            name="equipo40"
            hintText="Equipo"
            onChange={this.props.onChange}
            style={{width: '120px'}}
          />
        </div>
      </div>
    );
  }
}

export default TorneoForm;
