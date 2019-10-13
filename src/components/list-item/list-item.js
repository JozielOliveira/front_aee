import React from 'react'
import { ListItem as ListItemComponent, makeStyles } from '@material-ui/core'

export function ListItem({ children }) {
  const classes = useStyles()
  return (
    <ListItemComponent className={classes.itemList}>
      {children}
    </ListItemComponent>
  )
}

const useStyles = makeStyles(theme => ({
  itemList: {
    backgroundColor: '#707070',
    position: 'relative',
    marginBottom: '20px',
    borderRadius: '10px',
    padding: '18px 36px',
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: '#f2bf13',
      color: '#333333',
    },
    maxWidth: 1024,
  },
}))
