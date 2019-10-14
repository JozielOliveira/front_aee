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
  
  if (loading || removeUserResult.loading || error)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
          <CssBaseline />
          <Typography className={classes.title}>Usuários</Typography>
          <List>
            {users.sort((a, b) => b.id - a.id ).map( user =>
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
            )}
          </List>
          <FabAdd onClick={navigateAdd} />
      </main>
  )
}
