// Initial state
export const initialState = {
  isAuthenticated: false,
}
// Actions
export const ON_SET_AUTHENTICATION = 'AuthState/ON_SET_AUTHENTICATION'
export const ON_REMOVE_AUTHENTICATION = 'AuthState/ON_REMOVE_AUTHENTICATION'

// ACTION CREATORS
export const onSetAuthentication = () => ({ type: ON_SET_AUTHENTICATION })

export const onRemoveAuthentication = () => {
  localStorage.removeItem('token')
  return { type: ON_REMOVE_AUTHENTICATION }
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@@INIT':
      return {
        ...state,
        isAuthenticated: localStorage.getItem('token') ? true : false,
      }
    case ON_SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
      }

    case ON_REMOVE_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

// Selectors
export const selectIsAuthenticated = ({ authentication }) =>
  authentication.isAuthenticated
