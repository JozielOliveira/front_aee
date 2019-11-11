import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import { Accordion, Options } from '..'

const Question = ({ subIndex, item, onChange }) => {
  const getSubQuestions = () => item.show_sub_questions && item.show_sub_questions.value === item.value

  return (
    <>
      <Grid item>
        <Options
          label={item.label}
          value={item.value}
          onChange={onChange(subIndex)} 
          options={item.options} 
        /> 
      </Grid>
      {
        getSubQuestions() &&  
          item.sub_questions.map((item, index) => 
            <Question item={item} onChange={onChange} subIndex={index} key={index} />
          )
      }
    </>
  )
}

export const FormWithAccordion = ({ question }) => {
  const [state, setState] = useState(question)

  const handleChange = title => indexQuestion => indexSubQuestion => event => {
    setState(state.map(item => {
      if(item.title === title)
        return {
          ...item,
          questions: item.questions.map((question, index) => {
            if(question.sub_questions !== undefined && indexSubQuestion !== undefined )
              return {
                ...question,
                sub_questions: question.sub_questions.map((subQuestion, subIndex) => {
                  if(subIndex === indexSubQuestion)
                    return { ...subQuestion, value: event.target.value }
                  else
                    return subQuestion
                })
              }
            else
              if(index === indexQuestion)
                return { ...question, value: event.target.value }
              else
                return question
          })
        }
      else
        return item
    }))
  }

  const renderQuestions = (questions, onChange) =>
    <Grid container spacing={4}>
      {questions.map((item, index) => 
        <Question item={item} onChange={onChange(index)} key={index} />
      )}
    </Grid>

  const items = state.map( item => (
    { 
      title: item.title, 
      content: renderQuestions(item.questions, handleChange(item.title))
    }
  ))

  return <Accordion items={items} />
}

