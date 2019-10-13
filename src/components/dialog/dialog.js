import { Dialog as DialogComponent, withStyles } from '@material-ui/core'

export const Dialog = withStyles(theme => ({
  root: {
    '& .MuiDialog-paper': {
      background: theme.palette.secondary.main,
    },
    '& .MuiPaper-rounded': {
      borderRadius: theme.spacing(1),
    },
  },
}))(DialogComponent)
