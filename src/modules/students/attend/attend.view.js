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
  getStudent: { loading, student }, 
  history, 
  match: { params: { id }} 
}) => {
  const [state, setState] = useState({
    name: '',
    age: 0,
    gander: '',
    school: {
      grade: ''
    }
  })

  // const navigateGoBack = () => history.push('/alunos')
  const navigateReferral = () => history.push(`/encaminhamento/${id}`)

  // const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  // const handleSubmit = async event => {
  //   event.preventDefault()
    
  //   const data = await onEdit({ variables: { ...state, id }})

  //   if (data) navigateGoBack()
  // }

  useEffect(() => {
    if(student) setState({ ...state, ...student })
    // eslint-disable-next-line
  }, [student])

  const classes = useStyles()
  
  if (loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <CssBaseline />
        <Box textAlign="center" className={classes.title} m={2}>
          Atender aluno
        </Box>
        <Grid container spacing={2} style={{ marginBottom: 40 }}>
          <Grid item xs={12} sm={2} style={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center'
          }} >
            <Avatar style={{ 
              background: student.gender === 'male' ? '#2196f380' :' #f5005780',
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
            <Field label="Série" text={state.school.grade.toLocaleUpperCase()} />
          </Grid>
        </Grid>
        <Box className={classes.flow} m={2}>
          Fluxo
        </Box>
        <List>
          {flow.map( student =>
            <Paper 
              key={student.id} 
              className={classnames(classes.paper, student.disabled && classes.itemDisabled)}
              onClick={!student.disabled && navigateReferral}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={student.name}
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

const flow = [
  {
    id: "1",
    name: 'Encaminhamento',
    disabled: false
  },
  {
    id: "2",
    name: 'Anamnese',
    disabled: true
  },
  {
    id: "3",
    name: 'Testes',
    disabled: true
  },
]