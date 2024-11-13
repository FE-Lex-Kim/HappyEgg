import HomeBetterEggIntro from "./_components/HomeBetterEggIntro";
import HomeEggProductSlide from "./_components/homeEggProductSlide";
import HomeHappyEggContents from "./_components/homeHappyEggContents";
import HomeVideo from "./_components/HomeVideo";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden h-[5000px]">
      <HomeVideo />
      <HomeBetterEggIntro />
      <HomeHappyEggContents />
      <HomeEggProductSlide />
    </div>
  );
};

export default Home;
