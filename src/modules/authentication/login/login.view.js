import React, { useState } from 'react'
import { CssBaseline, Grid, Paper, Box, Button } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Loading, Password } from '../../../components'
import { isRequiredMessage, isEmail } from '../../../constants'
import { useStyles } from '../styles'

export const LoginView =  ({ onLogin, onLoginResult, onSetAuthentication, history }) => {
  const [state, setState] = useState({ email: '', password: '' })

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  const handleNavigateRegister = () => history.push('/register')

  const handleSubmit = async event => {
    event.preventDefault()
    
    const { email, password } = state
    const data = await onLogin({ variables: { email, password }})

    if (data) onSetAuthentication()
  }

  const classes = useStyles()
  
  if (onLoginResult.loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <CssBaseline />
          <Box textAlign="center" className={classes.title} fontWeight={600} fontSize={32} m={2}>
            Entrar
          </Box>
          <ValidatorForm
            className={classes.form}
            onSubmit={handleSubmit}
            onError={errors => console.log(errors)}
          >
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
              autoFocus
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
                  Entrar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleNavigateRegister}
                  color="primary"
                  fullWidth
                  size='small'
                >
                  Não sou cadastrado
                </Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Paper>
      </main>
  )
}
