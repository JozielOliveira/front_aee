import React from 'react'
import { 
  CssBaseline, 
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import { Loading, FabAdd, Title } from "../../../components"
import { useStyles } from './styles'

export const ListStudentsView =  ({ 
  getStudents: { loading, students, error },
  history 
}) => {
  const navigateAdd = () => history.push(`/aluno/adicionar`)
  const navigateAttend = id => () => history.push(`/aluno/atender/${id}`)

  const classes = useStyles()

  if (loading || error)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
          <CssBaseline />
          <Title>Alunos</Title>
          <List>
            {students.sort((a, b) => b.id - a.id ).map( student =>
              <Paper key={student.id} className={classes.paper} onClick={navigateAttend(student.id)}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ background: student.gender === 'male' ? '#2196f380' :' #f5005780' }} >
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={student.name}
                    secondary={student.school.grade.toLocaleUpperCase()}
                  />
                </ListItem>
              </Paper>
            )}
          </List>
          <FabAdd onClick={navigateAdd} />
      </main>
  )
}
