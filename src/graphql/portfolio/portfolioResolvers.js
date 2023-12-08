import portfolios from "./mockData";
import equities from "../assets/mockData";

const equityResolvers = {
  Query: {
    portfolio: async (parent, args) => {
      try {
        const { id } = args;
        const portfolio = portfolios.find((portfolio) => portfolio.id === id);
        const { positions } = portfolio;
        const mappedAssets = positions.map(({ assetID, amount }) => {
          const asset = equities.find((a) => a.id === assetID);
          return {
            asset,
            amount,
            value: asset.price * amount,
          };
        });

        return {
          id: portfolio.id,
          name: portfolio.name,
          description: portfolio.description,
          positions: mappedAssets,
          value: mappedAssets.reduce((acc, curr) => acc + curr.value, 0),
          tags: portfolio.tags,
        };
      } catch (error) {
        console.log({ error });
        throw new Error("Something went wrong");
      }
    },
  },
};

export default equityResolvers;
