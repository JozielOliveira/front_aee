import React from 'react'
import { CssBaseline, Paper, Box, makeStyles } from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator'

import { 
  ProgressMobileStepper, 
  ProgressDesktopStepper,
  ProgressDesktopStepperBottom
} from '..'

export const FormWithSteppers =  ({ title, steps, onAction, forms }) => {
  // Steps
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState(new Set())

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleSubmit = async event => {
    event.preventDefault()
    if (activeStep === steps.length){
      onAction()
    } else {
      const newCompleted = new Set(completed)
      newCompleted.add(activeStep)
      setCompleted(newCompleted)
      handleNext()
    }
  }

  const classes = useStyles()
  
  return (
    <main className={classes.layout}>
      <CssBaseline />
      <Box textAlign="center" className={classes.title} m={2}>
        {title}
      </Box>
      <Paper className={classes.paper}>
        <ProgressDesktopStepper
          steps={steps} 
          activeStep={activeStep}
          onSetActiveStep={setActiveStep} 
          completed={completed}
        />
        <ValidatorForm
          className={classes.form}
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >

          {/* FORM */}
          {forms[activeStep]}

          {/* FOR MOBILE */}
          <ProgressMobileStepper 
            steps={steps.length} 
            activeStep={activeStep}
            onSetActiveStep={setActiveStep} 
          />
          
          {/* FOR DESKTOP */}
          <ProgressDesktopStepperBottom
            steps={steps} 
            activeStep={activeStep}
            onSetActiveStep={setActiveStep} 
          />
        </ValidatorForm>
      </Paper>
    </main>
  )
}

const useStyles = makeStyles(theme => ({
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
  layout: {
    borderRadius: theme.spacing(1),
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 560,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 720,
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
