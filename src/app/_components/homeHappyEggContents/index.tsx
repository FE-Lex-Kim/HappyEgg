import LeftSideContents from "./leftSideContents";
import RightSideImages from "./RightSideImages";

const HomeHappyEggContents: React.FC = () => {
  return (
    <section className="relative flex justify-between w-[1400px] h-[1100px] m-auto py-[40px] px-[20px]">
      <img
        src="/images/heritage-blue-egg.webp"
        className="absolute -z-10 -top-[140px] left-[40%] translate-x-[-2.5rem]"
      />
      <img
        src="/images/homeContent.svg"
        className="absolute top-0 -right-[100px] -z-20"
      />
      <LeftSideContents />
      <RightSideImages />
      <img
        src="/images/heritage-brown-egg.webp"
        className="w-[270px] h-[278px] absolute bottom-[-30px] left-[2%]"
      />
    </section>
  );
};

export default HomeHappyEggContents;
