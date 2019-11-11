import React, { useState } from 'react'

import { Loading, FormWithSteppers } from "../../../components"

import { FormInitial } from '../components/steps/initial-registration'
import { FormSchool } from '../components/steps/school-registration'
import { FormGuardian } from '../components/steps/guardian-registration'
import { FormAddress } from '../components/steps/address-registration'
import { Preview } from '../components/steps/preview'


export const AddStudentView =  ({ onAdd, onAddResult: { loading }, history }) => {
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
      <FormWithSteppers
        title="Novo aluno"
        steps={['Aluno', 'Escola', 'Responsáveis', 'Endereço']}
        forms={stepForm}
        onAction={navigateGoBack}
      />
    )
}
