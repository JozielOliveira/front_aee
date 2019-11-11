import React, { useState } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

export const Note =  () => {
  const [state, setState] = useState({
    cognitive_development: '',
    socio_relational: '',
    difficulties_found: '',
    possibilities_observed: '',
    time_before_after_current_school: '',
    consolidated_learning: '',
    objectives_student: '',
  })

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  return (
    <>
      <TextValidator
        name="cognitive_development"
        label="Desenvolvimento cognitivo"
        value={state.cognitive_development}
        onChange={handleChange('cognitive_development')}
        color="secondary"
        margin="normal"
        fullWidth
        autoFocus
      />
      <TextValidator
        name="socio_relational"
        label="Relacionamento social"
        value={state.socio_relational}
        onChange={handleChange('socio_relational')}
        color="secondary"
        margin="normal"
        fullWidth
      />
      <TextValidator
        name="difficulties_found"
        label="Dificudades encontradas"
        value={state.difficulties_found}
        onChange={handleChange('difficulties_found')}
        color="secondary"
        margin="normal"
        fullWidth
      />
      <TextValidator
        name="possibilities_observed"
        label="Possibilidades observadas"
        value={state.possibilities_observed}
        onChange={handleChange('possibilities_observed')}
        color="secondary"
        margin="normal"
        fullWidth
      />
      <TextValidator
        name="time_before_after_current_school"
        label="Tempo de escolaridade"
        value={state.time_before_after_current_school}
        onChange={handleChange('time_before_after_current_school')}
        color="secondary"
        margin="normal"
        fullWidth
      />
      <TextValidator
        name="consolidated_learning"
        label="Aprendizagens consolidadas"
        value={state.consolidated_learning}
        onChange={handleChange('consolidated_learning')}
        color="secondary"
        margin="normal"
        fullWidth
      />
      <TextValidator
        name="objectives_student"
        label="Objetivos para este aluno"
        value={state.objectives_student}
        onChange={handleChange('objectives_student')}
        color="secondary"
        margin="normal"
        fullWidth
      />
    </>
  )
}
