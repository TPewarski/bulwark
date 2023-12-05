
// import { gql } from 'graphql-tag'


const Equity = `
    type Query {
        equity: Equity
    }

    type Equity {
        id: ID
        name: String
        description: String
        ticker: String
        amount: Float
        value: Float
    }
`
export default Equity