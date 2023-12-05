import { gql } from 'graphql-tag'
import Equity from './types/equity'

const typeDefs = gql`
  ${Equity}
`

export default typeDefs