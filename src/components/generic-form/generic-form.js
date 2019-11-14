import React from 'react'

import { FormWithAccordion } from './form-with-accordion'
import { FormWithoutAccordion } from './form-without-accordion'

export const genericForm =  ({ state, setState }) =>
  state.steps.map( step => {
    if(step.type === 'accordion')
      return <FormWithAccordion state={state} setState={setState} step={step} />
    else
      return <FormWithoutAccordion step={step} state={state} setState={setState} />
  })
