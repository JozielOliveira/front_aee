import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  makeStyles,
} from '@material-ui/core'

export const Nav = ({ title, links, onLogout }) => {
  const classes = useStyles()
  if (localStorage.getItem('token'))
    return (
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.toolbarTitle}>
            {title}
          </Typography>
          <nav>
            {links.map(({ label, route }, index) => (
              <NavLink
                key={index}
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: route,
                  state: {
                    name: label,
                    description: label,
                  },
                }}
              >
                <Button className={classes.buttonNavigation}>{label}</Button>
              </NavLink>
            ))}
          </nav>
          <Button
            color="inherit"
            variant="outlined"
            className={classes.link}
            onClick={onLogout}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    )
  else
    return <div></div>
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize: 32,
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    margin: theme.spacing(1, 1.5),
  },
  buttonNavigation: { color: 'white' },
}))
