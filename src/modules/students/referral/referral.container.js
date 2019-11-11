import { ReferralView } from './referral.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_REFERRAL, SAVE_REFERRAL } from '../resolvers'

const ReferralGraphQL = compose(
  graphql(GET_REFERRAL, {
    name: 'form',
    options: props => ({
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      variables: {
        id: props.match.params.id,
      },
    })
  }),
  graphql(SAVE_REFERRAL, {
    name: 'onSave',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true
    }
  })
)(ReferralView)

export default ReferralGraphQL