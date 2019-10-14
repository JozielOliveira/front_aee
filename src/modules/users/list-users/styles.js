import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background,
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: 48,
    color: theme.palette.text.hint,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  layout: {
    borderRadius: theme.spacing(1),
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(10)
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
