import React, { Component } from 'react'
import { Button, DialogActions, DialogContent } from '@material-ui/core'
import { Dialog, DialogTitle } from '../'
import { ValidatorForm } from 'react-material-ui-form-validator'

export class Modal extends Component {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.onClose} maxWidth="xs">
        <ValidatorForm ref="form" onSubmit={this.props.onSubmit}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>{this.props.children}</DialogContent>
          <DialogActions>
            {this.props.buttons.map(({ text, action, color, variant, type }, index) => (
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
