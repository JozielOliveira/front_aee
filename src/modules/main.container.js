import { connect } from 'react-redux'
import { MainView } from './main.view'
import { selectIsAuthenticated } from './authentication/authentication.state'
import { selectAlert, onOpenAlert, onCloseAlert } from './main.state'

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
  alert: selectAlert(state),
})

const mapActionsToProps = {
  onOpenAlert,
  onCloseAlert,
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(MainView)
