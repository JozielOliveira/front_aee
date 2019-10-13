import {
  DialogTitle as DialogTitleComponent,
  withStyles,
} from '@material-ui/core'

export const DialogTitle = withStyles(theme => ({
  root: {
    '& .MuiTypography-h6': {
      fontWeight: 500,
      color: theme.palette.primary.main,
      fontSize: theme.spacing(4),
      textAlign: 'center',
    },
  },
}))(DialogTitleComponent)
