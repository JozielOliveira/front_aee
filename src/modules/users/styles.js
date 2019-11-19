import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
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
  paper: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
  button: {
    marginTop: theme.spacing(5),
  },
  link: {
    textDecoration: 'none',
  },
}))
