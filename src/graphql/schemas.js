import { gql } from 'graphql-tag'
import equityTypes from './equity/equityTypes'

const typeDefs = gql`
  ${equityTypes}
`

export default typeDefs