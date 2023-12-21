const Portfolio = (props) => {
  const { portfolio } = props;
  return (
    <>
      <p>{portfolio.name}</p>;<p>{portfolio.description}</p>;
    </>
  );
};

export const getStaticProps = async () => {
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
    props: {
      portfolio: { name: "test", description: "test", value: 0, positions: [] },
    },
  };
};

export default Portfolio;
