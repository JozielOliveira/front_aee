import React from 'react'
import { FieldInput } from './field-input'
import { onChange, onChangeCheckbox } from './change-value'

export const Question = ({ titleForm, index, item, state, setState }) => {
  const handleChangeCheckbox = indexQuestion => name => () =>
    onChangeCheckbox(state, setState, titleForm, indexQuestion, name)

  const handleChange = indexQuestion => event =>
    onChange(state, setState, titleForm, indexQuestion, event)
  
  return (
    <FieldInput
      onChange={item.type === 'multiple' ? handleChangeCheckbox(index) : handleChange(index)} 
      {...item}
    /> 
  )
}