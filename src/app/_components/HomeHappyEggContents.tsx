const HomeHappyEggContents: React.FC = () => {
  return (
    <section className="relative flex justify-between w-[1400px] h-[1100px] -z-20 m-auto py-[40px] px-[20px]">
      <img src="/images/homeContent.svg" className="absolute -right-[100px]" />
      <img
        src="/images/heritage-blue-egg.webp"
        className="absolute -top-[140px] left-[40%]"
      />
      <div className="w-[50%] pt-[20px] pr-[20px] max-w-[34.375rem]">
        <p className="text-[14px] leading-[21px] text-[#1b1c47] mb-[1rem]">
          It's simple...
        </p>
        <h2 className="text-[#ff5700] mb-[30px] text-[5rem] leading-[5.3125rem] font-extrabold">
          Happy Hens,
          <br />
          Happy Eggs.
        </h2>
        <p className="text-[1.25rem] text-[#1b1c47] font-['Filson_Soft_Regular']">
          Happy Eggs come from Happy Hens. Makes sense, right? We've spent years
          learning the best ways to care for our hen breeds to encourage their
          natural behaviors and allow them to lay the Happiest eggs possible.
        </p>
      </div>
    </section>
  );
};

export default HomeHappyEggContents;
