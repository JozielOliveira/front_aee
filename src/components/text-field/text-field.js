import { withStyles } from '@material-ui/core'
import { TextValidator } from 'react-material-ui-form-validator'

export const TextField = withStyles(theme => ({
  root: {
    // '& .MuiInputBase-root': {
    //   color: theme.palette.secondary.light,
    // },
    // '& .MuiFormLabel-root': {
    //   color: theme.palette.secondary.light,
    // },
    // '& label.Mui-focused': {
    //   color: theme.palette.primary.main,
    // },
    // '& .MuiInput-underline:before': {
    //   borderBottomColor: theme.palette.secondary.light,
    // },
    // '& .MuiOutlinedInput-root': {
    //   '&:hover fieldset': {
    //     borderColor: theme.palette.primary.main,
    //   },
    //   '& fieldset': {
    //     borderColor: theme.palette.secondary.light,
    //   },
    // },
  },
}))(TextValidator)
