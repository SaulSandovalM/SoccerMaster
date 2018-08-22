import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import {MenuItem} from 'material-ui';

class TorneoForm extends Component {
  state = {
    otro:false,
    lista:[],
    subtipo:{
      Copa_del_Rey: [],
      Copa_America: [],
      Copa_Oro: [],
      Copa_Libertadores: [],
      Copa_Africana: [],
      Copa_Argentina: [],
      Confederaciones: [],
      Copa_Sudamericana: [],
      Femenil: [],
    }
  };

  partido = (e, i, v) => {
    if(v==="otro"){
      this.setState({otro:true});
      return this.props.partido(e,i,v);
    }
    this.setState({lista:this.state.subtipo[v], otro:false});
    this.props.partido(e,i,v);
  };

  render(){
    const {otro} = this.state;
    const {newItem} = this.props;
    return(
      <div className="Form-ingreso">
        <DatePicker
          autoOk={true}
          value={newItem.fecha}
          onChange={this.props.handleDate}
          hintText="Fecha del registro" />

        <TextField
          value={newItem.names}
          type="text"
          name="names"
          hintText="Jornada Uno"
          floatingLabelText="Número de la Jornada"
          onChange={this.props.onChange} />

        <SelectField
          value={newItem.equipo}
          name="equipo"
          type="text"
          floatingLabelText="Torneo en el que juega"
          onChange={this.partido}
        >
          <MenuItem value={"Copa_del_Rey"} primaryText="Copa del Rey" />
          <MenuItem value={"Copa_America"} primaryText="Copa America" />
          <MenuItem value={"Copa_Oro"} primaryText="Copa Oro" />
          <MenuItem value={"Copa_Libertadores"} primaryText="Copa Libertadores" />
          <MenuItem value={"Copa_Africana"} primaryText="Copa Africana" />
          <MenuItem value={"Copa_Argentina"} primaryText="Copa Argentina" />
          <MenuItem value={"Confederaciones"} primaryText="Confederaciones" />
          <MenuItem value={"Copa_Sudamericana"} primaryText="Copa Sudamericana" />
          <MenuItem value={"Femenil"} primaryText="Femenil" />

        </SelectField>
      </div>
    );
  }
}

export default TorneoForm;
