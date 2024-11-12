const LeftSideContents: React.FC = () => {
  return (
    <div className="flex flex-col w-[50%] pt-[20px] pr-[20px] max-w-[34.375rem]">
      <p className="text-[14px] leading-[21px] text-[#1b1c47] mb-[1rem]">
        It's simple...
      </p>
      <h2 className="text-[#ff5700] mb-[30px] text-[5rem] leading-[5.3125rem] font-extrabold">
        Happy Hens,
        <br />
        Happy Eggs.
      </h2>
      <p className="text-[1.25rem] text-[#1b1c47] font-['Filson_Soft_Regular'] mb-[1rem] ">
        Happy Eggs come from Happy Hens. Makes sense, right? We've spent years
        learning the best ways to care for our hen breeds to encourage their
        natural behaviors and allow them to lay the Happiest eggs possible.
      </p>
      <a className="block flex justify-center items-center text-[0.875rem] rounded-[30px] text-white bg-[#F7941D] w-[9.5194rem] h-[3.125rem] mt-[1.25rem]">
        Choose Happy
      </a>
    </div>
  );
};

export default LeftSideContents;
