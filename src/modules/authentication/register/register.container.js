import { RegisterView } from './register.view'
// REDUX
import { connect } from 'react-redux'
import { onSetAuthentication } from '../authentication.state'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { REGISTER } from '../resolvers'

const mapStateToProps = () => ({})
const mapActionsToProps = { onSetAuthentication }

const RegisterGraphQL = graphql(REGISTER, {
  name: 'onRegister',
  options: { 
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data : { register } }) =>
      localStorage.setItem('token', register.token), 
  }, 
})(RegisterView)

export default connect(
  mapStateToProps,
  mapActionsToProps
)(RegisterGraphQL)
