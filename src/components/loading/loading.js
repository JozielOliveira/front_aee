import React from 'react'
import { makeStyles, CircularProgress } from '@material-ui/core'

export const Loading =  () => {
  const classes = useStyles()
  
  return (
    <div className={classes.loading}>
      <CircularProgress size={80} />
    </div>
  )
}

const useStyles = makeStyles( theme => ({
  loading: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed'
  }
}))
