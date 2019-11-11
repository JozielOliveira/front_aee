import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import { Select } from "../../../../components"
import { isRequiredMessage } from '../../../../constants'

export const FormInitial = ({ onChange, name, date_birth, gender }) => {
  return (
    <>
      <TextValidator
        name="name"
        label="Nome"
        value={name}
        onChange={onChange('name')}
        validators={['required']}
        errorMessages={[isRequiredMessage]}
        color="secondary"
        margin="normal"
        autoFocus
        fullWidth
      />
      <TextValidator
        name="date_birth"
        label="Data de Nascimento"
        type="date"
        value={date_birth}
        onChange={onChange('date_birth')}
        validators={['required']}
        errorMessages={[isRequiredMessage]}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Select
        name="gender"
        label="Genêro"
        value={gender}
        onChange={onChange('gender')}
        items={[
          { label: 'Masculino', value: 'male' },
          { label: 'Faminino', value: 'female'}
        ]}
        validators={['required']}
        errorMessages={[isRequiredMessage]}
        color="secondary"
        margin="normal"
        fullWidth
      />
    </>
  )
}
