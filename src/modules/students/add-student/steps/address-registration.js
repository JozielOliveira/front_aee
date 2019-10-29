import React from 'react'
import { Grid } from '@material-ui/core'
import { TextValidator } from 'react-material-ui-form-validator'

import { isRequiredMessage } from '../../../../constants'

export const FormAddress =  ({ onChange, address }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextValidator
          name="zip_code"
          label="CEP"
          value={address.zip_code}
          onChange={onChange('zip_code')}
          validators={['required']}
          errorMessages={[isRequiredMessage]}
          color="secondary"
          margin="normal"
          autoFocus
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextValidator
          name="state"
          label="Estado"
          value={address.state}
          onChange={onChange('state')}
          validators={['required']}
          errorMessages={[isRequiredMessage]}
          color="secondary"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          name="city"
          label="Cidade"
          value={address.city}
          onChange={onChange('city')}
          validators={['required']}
          errorMessages={[isRequiredMessage]}
          color="secondary"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          name="neighborhood"
          label="Bairro"
          value={address.neighborhood}
          onChange={onChange('neighborhood')}
          validators={['required']}
          errorMessages={[isRequiredMessage]}
          color="secondary"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          name="street"
          label="Rua"
          value={address.street}
          onChange={onChange('street')}
          validators={['required']}
          errorMessages={[isRequiredMessage]}
          color="secondary"
          margin="normal"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}
