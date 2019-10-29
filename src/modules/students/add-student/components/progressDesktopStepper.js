import React from 'react';
import { Stepper, Step, StepButton, makeStyles } from '@material-ui/core'

export const ProgressDesktopStepper = ({ 
  steps, 
  activeStep, 
  onSetActiveStep, 
  completed, 
}) => {

  const handleStep = step => () => onSetActiveStep(step);

  const isStepComplete = (step) => completed.has(step);

  const classes = useStyles()

  return (
    <Stepper activeStep={activeStep} className={classes.root}>
      {steps.map((label, index) => {
        return (
          <Step key={label} >
            <StepButton
              onClick={handleStep(index)}
              completed={isStepComplete(index)}
            >
              {label}
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(550 + theme.spacing(2) * 2)]: {
      display: 'none'
    },
  },
}))