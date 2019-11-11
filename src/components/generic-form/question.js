import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import { Options, CheckboxGroupValidator } from '..'

export const Question = ({ titleForm, index, item, state, setState }) => {
  const handleChangeCheckbox = indexQuestion => name => () => 
    setState({
      ...state,
      steps : state.steps.map( step => {
        if(step.name === titleForm)
          return {
            ...step,
            questions: step.questions.map((elem, index) => {
              if(index === indexQuestion) 
                return {
                  ...elem,
                  options: elem.options.map(option => option.name === name ? { ...option, value: !option.value } : option) 
                }
              else
                return elem
            })
          }
        else
          return step
    })
  })

    const handleChange = indexQuestion => event =>
      setState({
        ...state,
        steps : state.steps.map( step => {
          if(step.name === titleForm)
            return {
              ...step,
              questions: step.questions.map((question, index) => index === indexQuestion ? { ...question, value: event.target.value } : question)
            }
          else
            return step
        })
      })

  switch (item.type) {
    case 'multiple':
      return (
        <CheckboxGroupValidator
          label={item.title}
          value={item.options}
          checks={item.options}
          onChange={handleChangeCheckbox(index)}
          margin="normal"
        />
      )
    case 'unique':
      return (
        <Options
          label={item.title}
          options={item.options}
          value={item.value}
          onChange={handleChange(index)}
        />
      )
    case 'date':
        return (
          <TextValidator
            name={item.name}
            label={item.title}
            value={item.value}
            onChange={handleChange(index)}
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )
    default:
      return (
        <TextValidator
          name={item.name}
          label={item.title}
          value={item.value}
          onChange={handleChange(index)}
          margin="normal"
          fullWidth
        />
      )
  }
} 