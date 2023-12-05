const resolvers = {
    Query: {
      equity: async () => {
        try {
        //   const response = await fetch(process.env.URL_API)
          const data = {
                name: "Palantir",
                id: "123",
                description: "equity defense tech",
                ticker: "PLTR",
                amount: 20000,
                price: 20
            }
  

        return {
            id: data.id,
            name: data.name,
            description: data.description,
            ticker: data.ticker,
            amount: data.amount,
            value: data.amount * data.price
        }
        } catch (error) {
          console.log({error})
          throw new Error("Something went wrong")
        }
      },
    //   searchAsset: async (_, { value }) => {
    //     try {
    //     //   const response = await fetch(`${process.env.URL_API}/search?q=${value}`)
    //       const data =  [{
    //         asset: {
    //             name: "Palantir",
    //             id: "123",
    //             description: "equity defense tech",
    //             ticker: "PLTR",
    //             amount: 20000,
    //             price: 20
    //         }
    //       }]

    //       return data.assets.map(u => {
    //         return {
    //           id: u.id,
    //           name: u.name,
    //           description: u.description,
    //           ticker: u.ticker,
    //           amount: u.amount,
    //           value: u.amount * u.price
    //         }
    //       })
    //     } catch (error) {
    //         console.log({error})
    //       throw new Error("Something went wrong")
    //     }
    //   }
    }
  }
  
  export default resolvers
     