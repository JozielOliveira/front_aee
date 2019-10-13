import { combineReducers } from 'redux'

import authentication from '../../modules/authentication/authentication.state'
import main from '../../modules/main.state'

export const reducers = {
  authentication,
  main,
}

export default combineReducers(reducers)
