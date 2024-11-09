const HomeBetterEggIntro: React.FC = () => {
  return (
    <section className="relative translate-y-[-5rem]">
      <img
        src="/images/home-intro-background.png"
        className="absolute -z-10 w-screen h-[51.25rem]"
      />
      <div className="flex flex-col justify-center items-center text-white w-screen h-[51.25rem]">
        <h2 className="text-[3.25rem] bg-cover font-extrabold">
          Our Recipe for Making a Better Egg
        </h2>
        <div className="relative w-[72.5rem] h-[25.75rem] mt-[5rem]">
          <img src="/images/home-intro-icons.webp" />
          <img
            src="/images/home-intro-dotted-line.webp"
            className="absolute top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBetterEggIntro;
