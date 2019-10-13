import React, { Component } from 'react'
import { Button, DialogActions, DialogContent } from '@material-ui/core'
import { Dialog, DialogTitle } from '../'
import { ValidatorForm } from 'react-material-ui-form-validator'

export class Modal extends Component {
  render() {
    const {
      open,
      onClose,
      onSubmit,
      title,
      buttons = [],
      children,
    } = this.props
    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs">
        <ValidatorForm ref="form" onSubmit={onSubmit}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            {buttons.map(({ text, action, color, variant, type }, index) => (
              <Button
                key={index}
                type={type}
                onClick={action}
                color={color}
                variant={variant}
              >
                {text}
              </Button>
            ))}
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    )
  }
}
