const getTeslaInfo = async () => {
  const result = await (
    await fetch(
      `https://raw.githubusercontent.com/marianzburlea/simple-api/main/data-base.json`
    )
  ).json();

  return result.tesla || [];
};

const Home = async () => {
  const list = await getTeslaInfo();
  return (
    <div>
      <h1>Home page </h1>
      <p>This is the page for your domaine</p>
      <ul>
        {list.map((item: any) => (
          <li key={item.id}>{item.who}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
