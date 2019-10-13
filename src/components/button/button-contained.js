import React from 'react'
import { makeStyles, Button, Typography, Box } from '@material-ui/core'

export const ButtonContained = props => {
  const classes = useStyles()
  return (
    <Button
      fullWidth
      variant="contained"
      className={[classes.submit, props.className]}
      onClick={props.onClick}
      {...props}
    >
      <Typography>
        <Box textAlign="center" fontWeight={600} fontSize={20} m={1}>
          {props.text}
        </Box>
      </Typography>
    </Button>
  )
}

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(1, 0, 1),
    padding: theme.spacing(1, 0),
  },
}))
