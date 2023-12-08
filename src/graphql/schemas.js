import { gql } from "graphql-tag";
import equityTypes from "./assets/equityTypes";
import portfolioTypes from "./portfolio/portfolioTypes";
import assetTypes from "./assets/assetTypes";

const typeDefs = gql`
  ${equityTypes}
  ${portfolioTypes}
  ${assetTypes}
`;

export default typeDefs;
