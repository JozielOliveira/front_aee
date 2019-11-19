import React from 'react'
import { 
  Paper,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import { ScaffoldList } from "../../../components"
import { useStyles } from './styles'

export const ListStudentsView =  ({ 
  getStudents: { loading, students, error },
  history 
}) => {
  const navigateAdd = () => history.push(`/aluno/adicionar`)
  const navigateAttend = id => () => history.push(`/aluno/atender/${id}`)

  const classes = useStyles()

  return (
    <ScaffoldList 
      title="Alunos" 
      isError={error}
      isLoading={loading}
      onClickFabAdd={navigateAdd}
      data={students}
      onSort={(a, b) => b.id - a.id}
      listItem={
        student =>
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
      }
    />
  )
}
