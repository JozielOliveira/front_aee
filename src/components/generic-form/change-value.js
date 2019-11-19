const onChangeValue = (state, setState, titleForm, changeValue) => 
  setState({
    ...state,
    steps : state.steps.map( step => {
      if(step.name === titleForm)
        return changeValue(step)
      else
        return step
    })
  })

const onChangeValueOption = (question, indexQuestion, index, event) => {
  if (index === indexQuestion)
    return { ...question, value: event.target.value } 
  else
    return question
}
const onChangeValueCheckbox = (indexQuestion, index, question, name) => {
  console.log(indexQuestion, index, question, name)
  if (indexQuestion === index)
    return { 
      ...question,
      options : question.options.map(option => option.name === name ? { ...option, value: !option.value } : option)
    }
  else
    return question
}

export const onChangeCheckbox = (state, setState, titleForm, indexQuestion, name) => {
  onChangeValue(state, setState, titleForm, step => {
    return {
      ...step,
      questions: step.questions.map((elem, index) => onChangeValueCheckbox(indexQuestion, index, elem, name))
    }
  })
}

export const onChange = (state, setState, titleForm, indexQuestion, event) =>
  onChangeValue(state, setState, titleForm, step => {
    return {
      ...step,
      questions: step.questions.map(
        (question, index) => onChangeValueOption(question, indexQuestion, index, event)
      )
    }
  })

const onSubQuestion = (step, title, indexQuestion, indexSubQuestion, value, onChangeValue) =>
  step.questions.map(item => {
    if(item.title === title)
      return {
        ...item,
        questions: item.questions.map((question, index) => {
          if(question.sub_questions !== undefined && indexSubQuestion !== undefined )
            return {
              ...question,
              sub_questions: question.sub_questions.map((subQuestion, subIndex) =>
                subIndex === indexQuestion 
                ? onChangeValue(subQuestion, indexSubQuestion, subIndex, value)
                : subQuestion
              )
            }
          else
            return onChangeValue(question, indexQuestion, index, value)
        })
      }
    else
      return item
  })


export const onChangeAccordion = (state, setState, titleForm, title, indexQuestion, indexSubQuestion, event) =>
  onChangeValue(state, setState, titleForm, step => ({
      ...step,
      questions: onSubQuestion(step, title, indexQuestion, indexSubQuestion, event, 
        (question, indexQuestion, index, event) =>
          onChangeValueOption(question, indexQuestion, index, event)
      )
    })
  )

export const onChangeCheckboxAccordion = (state, setState, titleForm, title, indexQuestion, indexSubQuestion, name) =>
  onChangeValue(state, setState, titleForm, step => ({
      ...step,
      questions: onSubQuestion(step, title, indexQuestion, indexSubQuestion, name, 
        (question, indexQuestion, index, value) => onChangeValueCheckbox(indexQuestion, index, question, value))
    })
  )
