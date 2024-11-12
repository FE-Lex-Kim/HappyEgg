const RightSideImages: React.FC = () => {
  return (
    <div className="relative w-[42.5rem] flex flex-col">
      <img
        src="/images/happy-egg-plate-table.webp"
        className="relative z-10 rounded-[20px] translate-y-[-3.125rem]  shadow-[12px_12px_#ff5700] w-[23.8125rem]"
      />
      <img
        src="/images/smiley-egg.png"
        className="absolute top-[120px] right-[100px]"
      />
      <div className="translate-y-[-9.375rem] -z-30 ml-auto relative before:bg-[url('/images/data_image_png;base….png')] before:left-[-40px] before:contents-[''] before:block before:bottom-[-40px] before:w-[495px] before:h-[525px] before:bg-no-repeat before:-z-40 before:left-[-40px] before:absolute before:bg-contain">
        <img src="/images/chicken-field.webp" className="rounded-[20px]" />
      </div>
      <img
        src="/images/yolk-in-shell.webp"
        className="w-[235px] h-[307px rounded-[20px] absolute bottom-[60px] left-[-200px]"
      />
    </div>
  );
};

export default RightSideImages;
