import React from 'react'
import { Grid } from '@material-ui/core'

import { Accordion } from '..'
import { FieldInput } from './field-input'
import { onChangeAccordion, onChangeCheckboxAccordion } from './change-value'
const Question = ({ subIndex, item, onChange, onCheckbox }) => {
  const getSubQuestions = () => item.show_sub_questions && item.show_sub_questions.value === item.value
  
  return (
    <>
      <Grid item xs={12}>
        <FieldInput
          onChange={item.type === 'multiple' ? onCheckbox(subIndex) : onChange(subIndex)} 
          {...item}
        /> 
      </Grid>
      {
        getSubQuestions() &&  
          item.sub_questions.map((subItem, index) => 
            <Grid key={index} item xs={12}>
              <Question
                onChange={onChange}
                onCheckbox={onCheckbox}
                subIndex={index} 
                item={subItem}
              />
            </Grid>
          )
      }
    </>
  )
}

export const FormWithAccordion = ({ step, state, setState }) => {
  const handleChange = title => indexQuestion => indexSubQuestion => event => {
    const titleForm = step.name
    onChangeAccordion(state, setState, titleForm, title, indexQuestion, indexSubQuestion, event)
  }

  const handleChangeCheckbox = title => indexQuestion => indexSubQuestion => name => () => {
    const titleForm = step.name
    onChangeCheckboxAccordion(state, setState, titleForm, title, indexQuestion, indexSubQuestion, name)
  }

  const renderQuestions = (questions, onChange, onCheckbox) =>
    <Grid container spacing={4}>
      {questions.map((item, index) => 
        <Question item={item} onCheckbox={onCheckbox(index)} onChange={onChange(index)} key={index} />
      )}
    </Grid>

  const items = step.questions.map( item => (
    { 
      title: item.title, 
      content: renderQuestions(item.questions, handleChange(item.title), handleChangeCheckbox(item.title))
    }
  ))

  return <Accordion items={items} />
}

