import React, { useState, useEffect } from 'react'

import { Loading, FormWithSteppers, genericForm } from "../../../components"

export const AnamneseView =  ({ 
  onSave,
  form: { loading, formAnamnese }, 
  history,
  match: { params: { id }} 
}) => {
  // Student Data
  const [state, setState] = useState({ title: '', steps: [] })

  const handleSave = async () => { 
    await onSave({ variables : { id, anamnese: { ...state }}})
    history.push(`/aluno/atender/${id}`)
  }

  useEffect(() => {
    if(formAnamnese) setState({ ...formAnamnese })
    // eslint-disable-next-line
  }, [formAnamnese])


  if (loading)
    return <Loading />
  else
    return (
      <FormWithSteppers
        title="Anamnese"
        steps={state.steps.map(step => step.name)}
        forms={genericForm({ state, setState })}
        onAction={handleSave}
      />
    )
}
