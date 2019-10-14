import { connect } from 'react-redux'
import { MainView } from './main.view'
import { selectIsAuthenticated, onRemoveAuthentication } from './authentication/authentication.state'
import { selectAlert, onOpenAlert, onCloseAlert } from './main.state'

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
  alert: selectAlert(state),
})

const mapActionsToProps = {
  onOpenAlert,
  onCloseAlert,
  onLogout: onRemoveAuthentication
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(MainView)
