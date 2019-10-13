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
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { Loading } from "../../../components"
import { useStyles } from './styles'

export const LoginView =  ({ getUsers: { loading, users } }) => {
  const classes = useStyles()

  if (loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
          <CssBaseline />
          <List>
            {users.map( user =>
              <Paper key={user.id} className={classes.paper}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={user.email}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Paper>
            )}
          </List>
      </main>
  )
}
