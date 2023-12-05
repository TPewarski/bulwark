const equityTypes = `
    type Query {
        equity: Equity
    }

    type Equity {
        id: ID
        name: String
        description: String
        ticker: String
        price: Float
    }
`;
export default equityTypes;
