import React from 'react'
import { Typography } from '@material-ui/core'

export const Field = ({ label, text }) => (
  <>
    <Typography variant="caption" color="textSecondary" >{label}</Typography>
    <Typography variant="subtitle1" >{text}</Typography>
  </>
)