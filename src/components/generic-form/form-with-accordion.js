import React from 'react'
import { Grid } from '@material-ui/core'
import { TextValidator } from 'react-material-ui-form-validator'

import { Accordion, Options, CheckboxGroupValidator } from '..'

const FieldInput = ({ subIndex, ...props}) => {
  switch (props.type) {
    case 'multiple':
      return (
        <CheckboxGroupValidator
          label={props.title}
          value={props.options}
          checks={props.options}
          margin="normal"
          fullWidth
          {...props}
        />
      )

    case 'unique':
      return (
        <Options
          label={props.title}
          options={props.options}
          value={props.value}
          fullWidth
          {...props}
        />
      )

    case 'date':
      return (
        <TextValidator
          name={props.name}
          label={props.title}
          value={props.value}
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          {...props}
        />
      )

    default:
      return (
        <TextValidator
          name={props.name}
          label={props.title}
          value={props.value}
          margin="normal"
          fullWidth
          {...props}
        />
      )
  }
}
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
    setState({
      ...state,
      steps : state.steps.map( step => {
        if(step.name === titleForm)
          return {
            ...step,
            questions: step.questions.map(item => {
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
                      if(index === indexQuestion && event )
                        return { ...question, value: event.target.value }
                      else
                        return question
                  })
                }
              else
                return item
            })
          }
        else
          return step
      })
    })
  }

  const handleChangeCheckbox = title => indexQuestion => indexSubQuestion => name => {
    const titleForm = step.name
    setState({
      ...state,
      steps : state.steps.map( step => {
        if(step.name === titleForm)
          return {
            ...step,
            questions: step.questions.map(item => {
              if(item.title === title)
                return {
                  ...item,
                  questions: item.questions.map((question, index) => {
                    if(question.sub_questions !== undefined && indexSubQuestion !== undefined )
                      return {
                        ...question,
                        sub_questions: question.sub_questions.map((subQuestion, subIndex) => {
                          if(subIndex === indexSubQuestion)
                            return {
                              ...subQuestion,
                              options: subQuestion.options.map(option => option.name === name ? { ...option, value: !option.value } : option) 
                            }
                          else
                            return subQuestion
                        })
                      }
                    else
                      if(index === indexQuestion)
                        return {
                          ...question,
                          options: question.options.map(option => option.name === name ? { ...option, value: !option.value } : option) 
                        }
                      else
                        return question
                  })
                }
              else
                return item
            })
          }
        else
          return step
      })
    })
  }

  const renderQuestions = (questions, onChange) =>
    <Grid container spacing={4}>
      {questions.map((item, index) => 
        <Question item={item} onCheckbox={handleChangeCheckbox(index)} onChange={onChange(index)} key={index} />
      )}
    </Grid>

  const items = step.questions.map( item => (
    { 
      title: item.title, 
      content: renderQuestions(item.questions, handleChange(item.title))
    }
  ))

  return <Accordion items={items} />
}

