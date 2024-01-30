import equities from "./mockData";

type Equity = {
  id?: string;
  name?: string;
  description?: string;
  ticker?: string;
  themes?: string[];
};

const equityResolvers = {
  Query: {
    equity: async (parent, args) => {
      try {
        //   const response = await fetch(process.env.URL_API)
        const data: Equity =
          equities.find((equity: Equity) => equity.ticker === args.ticker) ||
          {};

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
