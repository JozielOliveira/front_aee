import React from 'react'
import { 
  List,
  makeStyles,
  CssBaseline,
} from '@material-ui/core'

import { Loading, FabAdd, Title } from ".."

export const ScaffoldList =  ({ 
  title,
  data,
  listItem,
  onSort,
  onClickFabAdd,
  isLoading,
  isError 
}) => {

  const classes = useStyles()

  if (isLoading || isError)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <CssBaseline />
        <Title>{title}</Title>
        <List>
          {data.sort(onSort).map(listItem)}
        </List>
        {onClickFabAdd && <FabAdd onClick={onClickFabAdd} />}
      </main>
  )
}


const useStyles = makeStyles(theme => ({
  layout: {
    borderRadius: theme.spacing(1),
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      maxWidth: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))
