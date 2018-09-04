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
        <TextField
          value={newItem.partido}
          multiLine={true}
          rows={4}
          type="text"
          name="partido"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido1}
          multiLine={true}
          rows={4}
          type="text"
          name="partido1"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido2}
          multiLine={true}
          rows={4}
          type="text"
          name="partido2"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido3}
          multiLine={true}
          rows={4}
          type="text"
          name="partido3"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido4}
          multiLine={true}
          rows={4}
          type="text"
          name="partido4"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido5}
          multiLine={true}
          rows={4}
          type="text"
          name="partido5"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido6}
          multiLine={true}
          rows={4}
          type="text"
          name="partido6"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido7}
          multiLine={true}
          rows={4}
          type="text"
          name="partido7"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido8}
          multiLine={true}
          rows={4}
          type="text"
          name="partido8"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido9}
          multiLine={true}
          rows={4}
          type="text"
          name="partido9"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido10}
          multiLine={true}
          rows={4}
          type="text"
          name="partido10"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido11}
          multiLine={true}
          rows={4}
          type="text"
          name="partido11"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido12}
          multiLine={true}
          rows={4}
          type="text"
          name="partido12"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido13}
          multiLine={true}
          rows={4}
          type="text"
          name="partido13"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido14}
          multiLine={true}
          rows={4}
          type="text"
          name="partido14"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido15}
          multiLine={true}
          rows={4}
          type="text"
          name="partido15"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido16}
          multiLine={true}
          rows={4}
          type="text"
          name="partido16"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido17}
          multiLine={true}
          rows={4}
          type="text"
          name="partido17"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido18}
          multiLine={true}
          rows={4}
          type="text"
          name="partido18"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
        <TextField
          value={newItem.partido19}
          multiLine={true}
          rows={4}
          type="text"
          name="partido19"
          hintText="Pachuca 2 - América 2"
          floatingLabelText="Partidos"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default TorneoForm;
