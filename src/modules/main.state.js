// Initial state
export const initialState = {
  openAlert: false,
  message: '',
  variant: 'success',
}
// Actions
export const ON_OPEN_ALERT = 'MainState/ON_OPEN_ALERT'
export const ON_CLOSE_ALERT = 'MainState/ON_CLOSE_ALERT'

// Action creators
export const onOpenAlert = (variant, message) => ({
  type: ON_OPEN_ALERT,
  payload: { variant, message },
})

export const onCloseAlert = () => ({
  type: ON_CLOSE_ALERT,
})

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_OPEN_ALERT:
      const { variant, message } = action.payload
      return {
        ...state,
        openAlert: true,
        variant,
        message,
      }

    case ON_CLOSE_ALERT:
      return {
        ...state,
        openAlert: false,
      }

    default:
      return state
  }
}

// Selectors
export const selectAlert = ({ main }) => ({
  open: main.openAlert,
  message: main.message,
  variant: main.variant,
})
