// import Asset from "../assets/assetTypes";

const portfolioTypes = `
    type Query  {
        portfolio(id: ID): Portfolio
    }

    type Portfolio {
        portfolio(email: String, id: ID): Portfolio
    }

    type Portfolio {
        id: ID
        name: String
        description: String
        value: String
        positions: [Position]
        tags: [String]
    }

    type Position {
        asset: Asset
        amount: Float
        value: Float   
    }
`;
export default portfolioTypes;
