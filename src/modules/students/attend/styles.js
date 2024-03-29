import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background,
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: 36,
    color: theme.palette.text.hint,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  flow: {
    fontSize: 20,
    color: theme.palette.text.hint,
    fontWeight: 'bold',
  },
  layout: {
    borderRadius: theme.spacing(1),
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 480,
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
  itemDisabled: {
    borderRadius: theme.spacing(1),
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    boxShadow: 'none',
    color: 'rgba(0, 0, 0, 0.54)',
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
