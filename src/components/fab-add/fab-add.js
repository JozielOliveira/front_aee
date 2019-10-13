import React from 'react'
import { makeStyles, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export const FabAdd = ({ onClick }) => {
  const classes = useStyles()
  return (
    <Fab
      aria-label="add"
      className={classes.fab}
      color="primary"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  )
}

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    width: theme.spacing(8),
    height: theme.spacing(8),
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))
