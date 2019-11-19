import React from 'react'
import { 
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@material-ui/core'
import { ValidatorComponent } from 'react-material-ui-form-validator'
 
export class CheckboxGroupValidator extends ValidatorComponent {
    errorText() {
      const { isValid } = this.state

      if (isValid)
        return null
      else
        return <FormHelperText>{this.getErrorMessage()}</FormHelperText>
    }

    render() {
        return (
          <FormControl 
            error={!this.state.isValid}
            component="fieldset" 
            ref={(r) => { this.input = r }}
          >
            <FormLabel component="legend">{this.props.label}</FormLabel>
            <FormGroup>
              {this.props.checks.map((elem, index) =>
                <FormControlLabel
                  key={index}
                  label={elem.label}
                  control={
                    <Checkbox
                      color="primary"
                      checked={elem.value} 
                      onChange={this.props.onChange(elem.name)}
                    />
                  }
                />
              )}
            </FormGroup>
            {this.errorText()}
          </FormControl>
        )
    }
}
