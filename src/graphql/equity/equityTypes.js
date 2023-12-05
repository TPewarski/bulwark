const equityTypes = `
    type Query {
        equity(ticker: String): Equity
    }

    type Equity {
        id: ID
        name: String
        description: String
        ticker: String
        price: Float
        themes: [String]
    }
`;
export default equityTypes;
