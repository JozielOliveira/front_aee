import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { 
  CssBaseline, 
  Paper, 
  Grid, 
  Box, 
  Avatar, 
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import { Loading, Field } from "../../../components"
import { useStyles } from './styles'

export const AttendView =  ({ 
  // onEdit, 
  getAttend: { loading, attend }, 
  history, 
  match: { params: { id }} 
}) => {
  const [state, setState] = useState({
    name: '',
    age: 0,
    gander: '',
    grade: '',
    flow: []
  })

  const navigateAction = route => () => history.push(`/${route}/${id}`)

  useEffect(() => {
    if(attend) setState({ ...state, ...attend })
    // eslint-disable-next-line
  }, [attend])

  const classes = useStyles()

  if (loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <CssBaseline />
        <Box textAlign="center" className={classes.title} m={2}>
          Atendimento
        </Box>
        <Grid container spacing={2} style={{ marginBottom: 40 }}>
          <Grid item xs={12} sm={2} style={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center'
          }} >
            <Avatar style={{ 
              background: state.gender === 'male' ? '#2196f380' :' #f5005780',
              width: 48,
              height: 48,
            }} >
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item xs={10} sm={6} >
            <Field label="Nome" text={state.name} />
          </Grid>
          <Grid item>
            <Field label="Idade" text={state.age} />
          </Grid>
          <Grid item>
            <Field label="Série" text={state.grade.toLocaleUpperCase()} />
          </Grid>
        </Grid>
        <Box className={classes.flow} m={2}>
          Fluxo
        </Box>
        <List>
          {state.flow.map( (step, index) =>
            <Paper 
              key={index} 
              className={classnames(classes.paper, !step.status && classes.itemDisabled)}
              onClick={step.status ? navigateAction(step.route) : () => {}}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={step.title}
                />
              </ListItem>
            </Paper>
          )}
        </List>
        <Grid container justify="center" style={{ marginTop: 20 }}>
          <Button variant="contained" color="primary" disabled >Gerar parecer</Button>
        </Grid>
      </main>
  )
}
