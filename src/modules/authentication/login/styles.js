import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background,
    },
  },
  layout: {
    borderRadius: theme.spacing(1),
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 360,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
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
