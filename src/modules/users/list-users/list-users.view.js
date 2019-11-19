import React from 'react'
import { 
  Paper,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { ScaffoldList } from "../../../components"
import { useStyles } from '../styles'

export const ListUsersView =  ({ 
  getUsers: { loading, users, error }, 
  removeUser, 
  removeUserResult, 
  history 
}) => {
  const navigateAdd = () => history.push(`/usuario/adicionar`)
  const navigateEdit = id => () => history.push(`/usuario/editar/${id}`)
  const handleRemove = id => () => removeUser({ variables: { id }})

  const classes = useStyles()
  
  return (
    <ScaffoldList
      title="Usuários" 
      isError={error}
      isLoading={loading || removeUserResult.loading}
      onClickFabAdd={navigateAdd}
      data={users}
      onSort={(a, b) => b.id - a.id}
      listItem={ user =>
        <Paper key={user.id} className={classes.paper}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={user.email}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={navigateEdit(user.id)} edge="end">
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleRemove(user.id)} edge="end">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      }
    />
  )
}
