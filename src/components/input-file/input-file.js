import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { TextField } from '../'

export const InputFile = ({ text, onChange }) => {
  const [state, setState] = useState({
    path_file: '',
  })
  const handleChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    console.log(file.name)
    setState({ ...state, path_file: file.name })
    console.log(state.path_file)
    onChange({ target: { value: file.name } })
  }

  const isRequiredMensagem = 'Esta infomação é requerida'
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        value={state.path_file}
        onChange={() => {}}
        validators={['required']}
        errorMessages={[isRequiredMensagem]}
        margin="dense"
        id="criativo"
        label="Criativo*"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        component="label"
        style={{ height: 32 }}
      >
        {text}
        <input
          type="file"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </Button>
    </div>
  )
}
