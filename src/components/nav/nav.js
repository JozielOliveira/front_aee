import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  makeStyles,
  IconButton,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { SideBar } from './sidebar'

export const Nav = ({ title, links, onLogout }) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  if (localStorage.getItem('token'))
    return (
      <>
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography noWrap className={classes.toolbarTitle}>
              {title}
            </Typography>
            <nav>
              <div className={classes.menuDesktop} >
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
                <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.link}
                  onClick={onLogout}
                >
                  Sair
                </Button>
              </div>
              <div className={classes.menuMobile} >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(open && classes.hide)}
                >
                  <Menu />
                </IconButton>
              </div>
            </nav>
          </Toolbar>
        </AppBar>
        <SideBar
          open={open}
          onDrawerClose={handleDrawerClose}
          links={links}
        />
      </>
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
  menuDesktop : {
    display: 'none',    
    [theme.breakpoints.up(400 + theme.spacing(2) * 2)]: {
      display: 'block'
    },
  },
  menuMobile : {
    display: 'block',    
    [theme.breakpoints.up(400 + theme.spacing(2) * 2)]: {
      display: 'none'
    },
  },
  hide: {
    display: 'none',
  },
  link: {
    textDecoration: 'none',
    margin: theme.spacing(1, 1.5),
  },
  buttonNavigation: { color: 'white' },
}))
