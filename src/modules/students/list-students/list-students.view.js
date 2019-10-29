import React from 'react'
import { 
  CssBaseline, 
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { Loading, FabAdd } from "../../../components"
import { useStyles } from './styles'

export const ListStudentsView =  ({ 
  getStudents: { loading, students, error }, 
  removeStudent, 
  removeStudentResult, 
  history 
}) => {
  const navigateAdd = () => history.push(`/aluno/adicionar`)
  const navigateEdit = id => () => history.push(`/aluno/editar/${id}`)
  const handleRemove = id => () => removeStudent({ variables: { id }})

  const classes = useStyles()

  if (loading || removeStudentResult.loading || error)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
          <CssBaseline />
          <Typography className={classes.title}>Alunos</Typography>
          <List>
            {students.sort((a, b) => b.id - a.id ).map( student =>
              <Paper key={student.id} className={classes.paper}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={student.name}
                    secondary={student.school.grade.toLocaleUpperCase()}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={navigateEdit(student.id)} edge="end">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleRemove(student.id)} edge="end">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Paper>
            )}
          </List>
          <FabAdd onClick={navigateAdd} />
      </main>
  )
}
