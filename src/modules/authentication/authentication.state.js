// Initial state
export const initialState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAuthenticated: false,
  isLoading: false,
}
// Actions
export const ON_CHANGE = 'AuthState/ON_CHANGE'
export const ON_LOGIN = 'AuthState/ON_LOGIN'
export const ON_RESET = 'AuthState/ON_RESET'
export const ON_REQUEST = 'AuthState/ON_REQUEST'
export const ON_RESPONSE = 'AuthState/ON_RESPONSE'

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case '@@INIT':
      return {
        ...state,
        isAuthenticated: localStorage.getItem('token') ? true : false,
      }
    case ON_CHANGE:
      const { field, value } = action.payload
      return { ...state, [field]: value }

    case ON_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      }
    case ON_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ON_RESPONSE:
      return {
        ...state,
        isLoading: false,
      }
    case ON_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

// Selectors
export const selectName = ({ authentication }) => authentication.userName
export const selectEmail = ({ authentication }) => authentication.email
export const selectPassword = ({ authentication }) => authentication.password
export const selectConfirmPassword = ({ authentication }) =>
  authentication.confirmPassword
export const selectIsAuthenticated = ({ authentication }) =>
  authentication.isAuthenticated
export const selectLoading = ({ authentication }) => authentication.isLoading
