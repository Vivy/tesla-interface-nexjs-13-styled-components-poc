import { Box, Background } from '../component';

interface TeslaSection {
  who: string;
  text: string;
  link: string;
  id: string;
  buttonList: string[];
}

interface TeslaResult {
  tesla: TeslaSection[];
}

const getTeslaInfo = async () => {
  const result: TeslaResult = await (
    await fetch(
      `https://raw.githubusercontent.com/marianzburlea/simple-api/main/data-base.json`
    )
  ).json();

  return result.tesla;
};

const Home = async () => {
  const list = await getTeslaInfo();
  return (
    <Box gap='large'>
      <h1>Home page</h1>
      <p>This is the page for your domaine</p>

      <ul>
        {list.map((item, key) => (
          <Background
            section={item}
            key={item.id}
            goTo={list[key < list.length - 1 ? key + 1 : 0].id}
          >
            {item.who}
          </Background>
        ))}
      </ul>
    </Box>
  );
};

export default Home;
