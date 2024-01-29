const Page = async (props) => {
  const { portfolio } = await getData();

  return (
    <>
      <p>{portfolio.name}</p>
      <p>{portfolio.description}</p>
    </>
  );
};

async function getData() {
  const PORTFOLIO_ID = "123";
  let portfolio;
  const query = ``;
  try {
    // portfolio = await fetch("localhost:3000/api/graphql/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ query }),
    // });
    await fetch("http://localhost:3000/api/graphql/", {
      method: "POST",
      body: JSON.stringify({
        query: '{ portfolio(id: "123") { name, description } }',
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
  console.log(portfolio);
  return {
    portfolio: {
      name: "Tyler's portfolio",
      description: "The best portfolio out there",
      value: 0,
      positions: [],
    },
  };
}

export default Page;
