import equities from "./mockData";

const equityResolvers = {
  Query: {
    equity: async (parent, args) => {
      try {
        //   const response = await fetch(process.env.URL_API)
        const data = equities.find((equity) => equity.ticker === args.ticker);

        return {
          id: data.id,
          name: data.name,
          description: data.description,
          ticker: data.ticker,
          themes: data.themes,
        };
      } catch (error) {
        console.log({ error });
        throw new Error("Something went wrong");
      }
    },
  },
};

export default equityResolvers;
