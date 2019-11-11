import React from 'react'
import { 
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core'
import { ValidatorComponent } from 'react-material-ui-form-validator'

export class Options extends ValidatorComponent {
  errorText() {
    const { isValid } = this.state

    if (isValid)
      return null
    else
      return <FormHelperText>{this.getErrorMessage()}</FormHelperText>
  }

  render() {
    return (
      <FormControl component="fieldset" margin="normal"  >
        <FormLabel component="legend" style={{ lineHeight: 1.5 }}>{this.props.label}</FormLabel>
        <RadioGroup value={this.props.value} onChange={this.props.onChange}>
          {this.props.options.map( (option, index) =>
            <FormControlLabel key={index} value={option.value} control={<Radio color="primary" />} label={option.label} />
          )}
        </RadioGroup>
        {this.errorText()}
      </FormControl>
    )
  }
}