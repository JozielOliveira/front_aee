import { LoginView } from './login.view'
// REDUX
import { connect } from 'react-redux'
import { selectIsAuthenticated } from '../authentication.state'
import { selectAlert, onOpenAlert } from '../../main.state'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { LOGIN } from '../resolvers'

const mapStateToProps = state => ({
  isAuthenticated: selectIsAuthenticated(state),
  alert: selectAlert(state),
})

const mapActionsToProps = {
  onOpenAlert,
}

const LoginGraphQL = graphql(LOGIN, {
  name: 'onLogin',
  options: { 
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data : { login } }) =>
      localStorage.setItem('token', login.token), 
  }, 
})(LoginView)

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginGraphQL)

