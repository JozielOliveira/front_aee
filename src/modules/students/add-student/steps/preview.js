import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'

const Field = ({ label, text }) => (
  <>
    <Typography variant="caption" color="textSecondary" >{label}</Typography>
    <Typography variant="subtitle1" >{text}</Typography>
  </>
)

export const Preview =  ({
  data: {
    name= String,
    date_birth= String,
    gender= String,
    mother= Object,
    father= Object,
    address= Object,
    school= Object,
  }
}) => {
  
  return (
    <Grid spacing={2} container>
      <Grid item wrap="nowrap" xs={12} sm={6} >
        <Field label="Nome" text={name} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={4} >
        <Field label="Data de Aniversário" text={date_birth} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={2} >
        <Field label="Genêro" text={gender === "male" ? 'M' : 'F'} />
      </Grid>
      <Grid item xs={12} sm={12} >
        <Divider component="div" />
      </Grid>
      {/* SCHOOL */}
      <Grid item wrap="nowrap" xs={12} sm={6} >
        <Field label="Nome da escola" text={school.school} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={4} >
        <Field label="Nome da Professora" text={school.teacher} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={2} >
        <Field label="Série" text={school.grade} />
      </Grid>
      <Grid item xs={12} sm={12} >
        <Divider component="div" />
      </Grid>
      {/* GUARDIANS */}
      {mother.name && (
        <>
          <Grid item wrap="nowrap" xs={12} sm={8} >
            <Field label="Nome da Mãe" text={mother.name} />
          </Grid>
          <Grid item wrap="nowrap" xs={12} sm={4} >
            <Field label="Contato da Mãe" text={mother.phone} />
          </Grid>
        </>
      )}
      {father.name && (
        <>
          <Grid item wrap="nowrap" xs={12} sm={8} >
            <Field label="Nome do Pai" text={father.name} />
          </Grid>
          <Grid item wrap="nowrap" xs={12} sm={4} >
            <Field label="Contato do Pai" text={father.phone} />
          </Grid>
        </>
      )}
      <Grid item xs={12} sm={12} >
        <Divider component="div" />
      </Grid>
      {/* ADDRESS */}
      <Grid item wrap="nowrap" xs={12} sm={3} >
        <Field label="CEP" text={address.zip_code} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={2} >
        <Field label="Estado" text={address.state} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={7} >
        <Field label="Cidade" text={address.city} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={6} >
        <Field label="Bairro" text={address.neighborhood} />
      </Grid>
      <Grid item wrap="nowrap" xs={12} sm={6} >
        <Field label="Rua" text={address.street} />
      </Grid>
    </Grid>
  )
}
