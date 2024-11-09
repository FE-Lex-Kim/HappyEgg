import HomeBetterEggIntro from "./_components/homeBetterEggIntro";
import HomeHappyEggContents from "./_components/HomeHappyEggContents";
import HomeVideo from "./_components/homeVideo";

const Home: React.FC = () => {
  return (
    <>
      <HomeVideo />
      <HomeBetterEggIntro />
      <HomeHappyEggContents />
    </>
  );
};

export default Home;
