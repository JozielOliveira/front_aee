import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import { MenuItem } from '@material-ui/core'

export const Select = ({ items, ...props }) => {
  return (
    <TextValidator
      select
      {...props}
    >
      {items.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextValidator>
  )
}