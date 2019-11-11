import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import { Grid } from '@material-ui/core'

export const FormGuardian =  ({ onChangeMother, onChangeFather, mother, father }) => {
  return (
    <Grid spacing={2}>
      <Grid item>
        <TextValidator
          name="name"
          label="Nome da Mãe"
          value={mother.name}
          onChange={onChangeMother('name')}
          color="secondary"
          autoFocus
          fullWidth
        />
        <TextValidator
          name="teacher"
          label="Telefone da Mãe"
          value={mother.phone}
          onChange={onChangeMother('phone')}
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid  item>
        <TextValidator
          name="name"
          label="Nome do Pai"
          value={father.name}
          onChange={onChangeFather('name')}
          color="secondary"
          fullWidth
        />
        <TextValidator
          name="teacher"
          label="Telefone  do Pai"
          value={father.phone}
          onChange={onChangeFather('phone')}
          margin="normal"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}
