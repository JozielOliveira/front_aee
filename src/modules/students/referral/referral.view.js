import React, { useState, useEffect } from 'react'

import { Loading, FormWithSteppers, genericForm } from "../../../components"

export const ReferralView =  ({ 
  onSave,
  form: { loading, formReferral }, 
  history,
  match: { params: { id }} 
}) => {
  // Student Data
  const [state, setState] = useState({ title: '', steps: [] })

  const handleSave = async () => { 
    await onSave({ variables : { id, referral: { ...state }}})
    history.push(`/aluno/atender/${id}`)
  }

  useEffect(() => {
    if(formReferral) setState({ ...formReferral })
    // eslint-disable-next-line
  }, [formReferral])


  if (loading)
    return <Loading />
  else
    return (
      <FormWithSteppers
        title="Encaminhamento"
        steps={state.steps.map(step => step.name)}
        forms={genericForm({ state, setState })}
        onAction={handleSave}
      />
    )
}
