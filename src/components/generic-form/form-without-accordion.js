import React from 'react'
import { Grid } from '@material-ui/core'

import { Question } from './question'

export const FormWithoutAccordion =  ({ step, state, setState }) => {
  return (
    <Grid container spacing={2} >
      {step.questions.map((item, index) => 
        <Grid key={index} item xs={12}>
          <Question 
            titleForm={step.name}
            state={state}
            setState={setState} 
            item={item} 
            index={index} 
          />
        </Grid>
      )}
    </Grid>
  )
}