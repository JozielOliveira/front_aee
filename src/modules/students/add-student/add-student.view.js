import React, { useState } from 'react'
import { CssBaseline, Paper, Box } from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator'

import { Loading } from "../../../components"
import { useStyles } from './styles'

import { FormInitial } from './steps/initial-registration'
import { FormSchool } from './steps/school-registration'
import { FormGuardian } from './steps/guardian-registration'
import { FormAddress } from './steps/address-registration'
import { Preview } from './steps/preview'

import { 
  ProgressMobileStepper, 
  ProgressDesktopStepper,
  ProgressDesktopStepperBottom
} from './components'

const steps = ['Aluno', 'Escola', 'Responsáveis', 'Endereço']

export const AddStudentView =  ({ onAdd, onAddResult: { loading }, history }) => {
  // Steps
  const [activeStep, setActiveStep] = React.useState(4)
  const [completed, setCompleted] = React.useState(new Set());
  // Student Data
  const [state, setState] = useState({
    name: 'Joziel Oliveira Santos',
    date_birth: '2000-01-16',
    gender: 'male',
    mother: {
      name: 'Sandra Maria Santos de Oliveira',
      phone: '51 996405320'
    },
    father: {
      name: 'Roberto de Oliveira',
      phone: '51 997816535'
    },
    address: {
      zip_code: "95555-000",
      state: "RS",
      city: "Capão da Canoa",
      neighborhood: "Zona Nova",
      street: "Av. D"
    },
    school: {
      school: "Leopoldina",
      teacher:"Jane",
      grade: "primeira",
    },
  })

  const navigateGoBack = () => history.push('/alunos')

  const handleChange = name => event => setState({ ...state, [name]: event.target.value})

  const handleChangeSchool = name => event => 
    setState({ ...state, school: { ...state.school, [name]: event.target.value} })
  const handleChangeMother = name => event => 
    setState({ ...state, mother: { ...state.mother, [name]: event.target.value} })
  const handleChangeFather = name => event => 
    setState({ ...state, father: { ...state.father, [name]: event.target.value} })
  const handleChangeAddress = name => event =>
    setState({ ...state, address: { ...state.address, [name]: event.target.value} })

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)

  const handleSubmit = async event => {
    event.preventDefault()
    if (activeStep === 4){
      const data = await onAdd({ variables: { ...state }})
      if (data) navigateGoBack()
    } else {
      const newCompleted = new Set(completed)
      newCompleted.add(activeStep)
      setCompleted(newCompleted)
      handleNext()
    }
  }

  const classes = useStyles()

  const stepForm = [
    <FormInitial 
      onChange={handleChange}
      name={state.name}
      date_birth={state.date_birth}
      gender={state.gender}
    />,
    <FormSchool 
      onChange={handleChangeSchool}
      school={state.school}
    />,
    <FormGuardian 
      onChangeMother={handleChangeMother}
      onChangeFather={handleChangeFather}
      mother={state.mother}
      father={state.father}
    />,
    <FormAddress 
      onChange={handleChangeAddress}
      address={state.address}
    />,
    <Preview data={state} />,
  ]
  
  if (loading)
    return <Loading />
  else
    return (
      <main className={classes.layout}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Box textAlign="center" className={classes.title} m={2}>
            Novo aluno
          </Box>
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
            {stepForm[activeStep]}

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
