import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Drawer,
  makeStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Button
} from '@material-ui/core'
import { ChevronLeft, ChevronRight, Inbox, Mail } from '@material-ui/icons'

export const SideBar = ({ open, onDrawerClose, links }) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronRight /> : <ChevronLeft /> }
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          {links.map(({ label, route }, index) => (
            <ListItem button key={label}>
              <NavLink
                key={index}
                className={classes.link}
                to={{
                  pathname: route,
                  state: {
                    name: label,
                    description: label,
                  },
                }}
              >
                <ListItemText primary={label} />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark
  }
}))
