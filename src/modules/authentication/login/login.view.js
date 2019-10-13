import React, { useState } from 'react'
import { CssBaseline, Paper, Box, Button } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Loading } from '../../../components'
import { isRequiredMessage, isEmail} from '../../../constants'
import { useStyles } from './styles'

export const LoginView =  ({ onLogin, onLoginResult, onSetAuthentication }) => {
  const [state, setState] = useState({ email: '', password: '' })

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

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
          <Box textAlign="center" fontWeight={600} fontSize={32} m={2}>
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
            <TextValidator
              name="password"
              label="Password"
              value={state.password}
              type="password"
              onChange={handleChange('password')}
              validators={['required']}
              errorMessages={[ isRequiredMessage ]}
              color="secondary"
              margin="normal"
              required
              fullWidth
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Entrar
            </Button>
          </ValidatorForm>
        </Paper>
      </main>
  )
}
