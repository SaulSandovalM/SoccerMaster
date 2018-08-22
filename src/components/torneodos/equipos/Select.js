import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class Select extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Tipos"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={false} primaryText="Paquete" />
          <MenuItem value={true} primaryText="Rutina" />
          <MenuItem value={true} primaryText="Otro" />

        </SelectField>
      </div>
    );
  }
}
