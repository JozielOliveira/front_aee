import React from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'

export const ProgressDesktopStepperBottom = ({ 
  steps, 
  activeStep, 
  onSetActiveStep, 
}) => {
  const handleBack = () => onSetActiveStep(prevActiveStep => prevActiveStep - 1)
  
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="flex-end" className={classes.root} >
      <Grid item>
        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
          Voltar
        </Button>
      </Grid>
      <Grid item>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
        { steps.length !== activeStep ? 'Próximo' : 'Salvar'}
        </Button>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(550 + theme.spacing(2) * 2)]: {
      display: 'none'
    },
  },
  button: {
    marginTop: theme.spacing(5),
  },
}))
