import { LoginView } from './login.view'

// REDUX
import { connect } from 'react-redux'
import { onSetAuthentication } from '../authentication.state'

// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { LOGIN } from '../resolvers'

const mapStateToProps = () => ({})
const mapActionsToProps = { onSetAuthentication }

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

