import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import { isRequiredMessage, minCaracterPassword } from '../../constants'

export const Password =  props => {
    return (
      <TextValidator
        {...props}
        name="password"
        label="Password"
        type="password"
        validators={['required', 'minStringLength:6']}
        errorMessages={[ isRequiredMessage,  minCaracterPassword ]}
        color="secondary"
        margin="normal"
        required
        fullWidth
      />
    )
}
