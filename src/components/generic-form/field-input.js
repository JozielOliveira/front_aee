import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import { Options, CheckboxGroupValidator } from '..'

export const FieldInput = ({ subIndex, ...props}) => {
  switch (props.type) {
    case 'multiple':
      return (
        <CheckboxGroupValidator
          label={props.title}
          value={props.options}
          checks={props.options}
          margin="normal"
          fullWidth
          {...props}
        />
      )

    case 'unique':
      return (
        <Options
          label={props.title}
          options={props.options}
          value={props.value}
          fullWidth
          {...props}
        />
      )

    case 'date':
      return (
        <TextValidator
          name={props.name}
          label={props.title}
          value={props.value}
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          {...props}
        />
      )

    default:
      return (
        <TextValidator
          name={props.name}
          label={props.title}
          value={props.value}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          {...props}
        />
      )
  }
}