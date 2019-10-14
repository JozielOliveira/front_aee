import React, { useState, useEffect } from 'react'
import { CssBaseline, Paper, Grid, Box, Button } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Loading } from "../../../components"
import { isRequiredMessage, isEmail} from '../../../constants'
import { useStyles } from './styles'

export const EditUserView =  ({ 
  onEdit, 
  getUser: { loading, user }, 
  history, 
  match: { params: { id }} 
}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    profession: '', 
    password: ''
  })

  const navigateGoBack = () => history.push('/')

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  const handleSubmit = async event => {
    event.preventDefault()
    
    const data = await onEdit({ variables: { ...state, id }})

    if (data) navigateGoBack()
  }

  useEffect(() => {
    if(user) setState({ ...state, ...user })
  }, [user])

  const classes = useStyles()
  
  if (loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <CssBaseline />
          <Box textAlign="center" fontWeight={600} fontSize={32} m={2}>
            Novo usuário
          </Box>
          <ValidatorForm
            className={classes.form}
            onSubmit={handleSubmit}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              name="name"
              label="Nome"
              value={state.name}
              onChange={handleChange('name')}
              validators={['required']}
              errorMessages={[isRequiredMessage]}
              color="secondary"
              margin="normal"
              autoFocus
              fullWidth
            />
            <TextValidator
              name="email"
              label="Email"
              value={state.email}
              onChange={handleChange('email')}
              validators={['required', 'isEmail']}
              errorMessages={[isRequiredMessage, isEmail]}
              color="secondary"
              margin="normal"
              fullWidth
            />
            <TextValidator
              name="profession"
              label="Profissão"
              value={state.profession}
              onChange={handleChange('profession')}
              validators={['required']}
              errorMessages={[isRequiredMessage]}
              color="secondary"
              margin="normal"
              fullWidth
            />
            <TextValidator
              name="password"
              label="Senha"
              value={state.password}
              type="password"
              onChange={handleChange('password')}
              color="secondary"
              margin="normal"
              fullWidth
            />
            <Grid container spacing={2} justify="flex-end" >
              <Grid item>
                <Button
                  onClick={navigateGoBack}
                  color="primary"
                  fullWidth
                  variant="outlined"
                  className={classes.button}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  className={classes.button}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Paper>
      </main>
  )
}
