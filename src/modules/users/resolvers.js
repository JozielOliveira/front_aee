import { gql } from 'apollo-boost'

export const GET_USER = gql`
  {
    users {
      id,
      name,
      email,
      profession,
    }
  }
`