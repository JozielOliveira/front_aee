import React, { useState } from 'react'
import { CssBaseline, Grid, Paper, Box, Button } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Loading, Password } from '../../../components'
import { isRequiredMessage, isEmail} from '../../../constants'
import { useStyles } from './styles'

export const RegisterView =  ({ onRegister, onRegisterResult, onSetAuthentication, history }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    profession: '', 
    password: '' 
  })

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  const handleNavigateGoBack = () => history.goBack()

  const handleSubmit = async event => {
    event.preventDefault()
    
    const data = await onRegister({ variables: { ...state }})

    if (data) onSetAuthentication()
  }

  const classes = useStyles()
  
  if (onRegisterResult.loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <CssBaseline />
          <Box textAlign="center" className={classes.title} fontWeight={600} fontSize={32} m={2}>
            Registrar-se
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
              required
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
              required
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
              required
              fullWidth
            />
            <Password
              value={state.password}
              onChange={handleChange('password')}
            />
            <Grid container spacing={2} className={classes.button} >
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                >
                  Registrar-se
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleNavigateGoBack}
                  color="primary"
                  fullWidth
                  size='small'
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Paper>
      </main>
  )
}
