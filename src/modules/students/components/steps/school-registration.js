import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import { isRequiredMessage } from '../../../../constants'

export const FormSchool =  ({ onChange, school }) => {
  return (
    <>
      <TextValidator
        name="school"
        label="Nome da Escola"
        value={school.school}
        onChange={onChange('school')}
        validators={['required']}
        errorMessages={[isRequiredMessage]}
        color="secondary"
        margin="normal"
        required
        autoFocus
        fullWidth
      />
      <TextValidator
        name="teacher"
        label="Professora"
        value={school.teacher}
        onChange={onChange('teacher')}
        margin="normal"
        required
        fullWidth
      />
      <TextValidator
        name="grade"
        label="Série"
        value={school.grade}
        onChange={onChange('grade')}
        validators={['required']}
        errorMessages={[isRequiredMessage]}
        color="secondary"
        margin="normal"
        required
        fullWidth
      />
    </>
  )
}
