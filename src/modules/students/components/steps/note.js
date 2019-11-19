import React, { useState } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

const initialState = {
  cognitive_development: '',
  socio_relational: '',
  difficulties_found: '',
  possibilities_observed: '',
  time_before_after_current_school: '',
  consolidated_learning: '',
  objectives_student: '',
}

const fields = [
  { 
    name: 'cognitive_development',
    label: 'Desenvolvimento cognitivo',
  },
  { 
    name: 'socio_relational',
    label: 'Relacionamento social',
  },
  { 
    name: 'difficulties_found',
    label: 'Dificudades encontradas',
  },
  { 
    name: 'possibilities_observed',
    label: 'Possibilidades observadas',
  },
  { 
    name: 'time_before_after_current_school',
    label: 'Tempo de escolaridade',
  },
  { 
    name: 'consolidated_learning',
    label: 'Aprendizagens consolidadas',
  },
  { 
    name: 'objectives_student',
    label: 'Objetivos para este aluno',
  },
]

export const Note =  () => {
  const [state, setState] = useState(initialState)

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  return (
    <>
      {fields.map((field, index) => 
        <TextValidator
          name={field.name}
          label={field.label}
          value={state[field.name]}
          onChange={handleChange(field.name)}
          color="secondary"
          margin="normal"
          fullWidth
          autoFocus={index === 0}
        />
      )}
    </>
  )
}
