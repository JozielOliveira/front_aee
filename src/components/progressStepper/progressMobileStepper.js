import React from 'react'
import { useTheme, makeStyles, MobileStepper, Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

export const ProgressMobileStepper = ({ steps, activeStep, onSetActiveStep }) => {
  const theme = useTheme()
  const classes = useStyles()

  const handleBack = () => onSetActiveStep(prevActiveStep => prevActiveStep - 1)
  
  return (
    <MobileStepper
      variant="progress"
      steps={steps + 1}
      position="bottom"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button type="submit" size="small" disabled={activeStep === 5}>
          { steps !== activeStep ? 'Próximo' : 'Salvar'}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Voltar
        </Button>
      }
    />
  )
}

const useStyles = makeStyles( theme => ({
  root: {
    [theme.breakpoints.up(550 + theme.spacing(2) * 2)]: {
      display: 'none',
    },
  },
}))