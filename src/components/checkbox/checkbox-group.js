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
        const { label } = this.props
        const { isValid } = this.state

        return (
          <FormControl 
            error={!isValid}
            component="fieldset" 
            ref={(r) => { this.input = r }}
          >
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
              {this.props.checks.map( (elem, index) =>
                <FormControlLabel
                  key={index}
                  label={elem.label}
                  control={
                    <Checkbox 
                      color="primary"
                      checked={elem.value} 
                      onChange={this.props.onChange(elem.name)} 
                      value={elem.value} 
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
