import { AnamneseView } from './anamnese.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_ANAMNESE, SAVE_ANAMNESE } from '../resolvers'

const AnamneseGraphQL = compose(
  graphql(GET_ANAMNESE, {
    name: 'form',
    options: props => ({
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      variables: {
        id: props.match.params.id,
      },
    })
  }),
  graphql(SAVE_ANAMNESE, {
    name: 'onSave',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true
    }
  })
)(AnamneseView)

export default AnamneseGraphQL