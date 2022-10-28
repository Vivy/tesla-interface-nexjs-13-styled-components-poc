import { Background } from '@c/background';
import { Box } from '@c/box';

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
    <>
      {list.map((item, key) => (
        <Background
          section={item}
          key={item.id}
          goTo={list[key < list.length - 1 ? key + 1 : 0].id}
        >
          {item.who}
        </Background>
      ))}
    </>
  );
};

export default Home;
