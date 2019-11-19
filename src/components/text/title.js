import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

export const Title = props => {
  const classes = useStyles()

  return <Typography className={classes.title}>{props.children}</Typography>
}

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    fontSize: 48,
    color: theme.palette.text.hint,
    fontWeight: 'bold',
    textAlign: 'center'
  },
}))
