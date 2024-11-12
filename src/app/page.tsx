import HomeBetterEggIntro from "./_components/homeBetterEggIntro";
import HomeHappyEggContents from "./_components/homeHappyEggContents";
import HomeVideo from "./_components/homeVideo";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden h-[5000px]">
      <HomeVideo />
      <HomeBetterEggIntro />
      <HomeHappyEggContents />
    </div>
  );
};

export default Home;
