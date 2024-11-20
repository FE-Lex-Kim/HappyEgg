"use client";

import { log } from "console";
import { useEffect, useRef, useState } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 초기 사이즈 설정
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      console.log("unmount");

      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트된 후 한 번만 실행되도록

  return viewport;
};

const HomeEggProductSlide: React.FC = () => {
  const [currentSlideNum, setCurrentSlideNum] = useState(0);
  const { width } = useViewport();
  const calcSlidePx = `${width / 2 - 2925 - 650 * currentSlideNum}px`;

  const rightButtonClick = () => {
    setCurrentSlideNum(currentSlideNum + 1);
  };
  const leftButtonClick = () => {
    setCurrentSlideNum(currentSlideNum - 1);
  };

  useEffect(() => {
    return;
  });
  return (
    <section className="h-[950px]">
      <div className="relative overflow-hidden">
        <img
          src="/images/slideBottom.svg"
          className="absolute z-10 scale-[-1] h-[97px] w-[100%]"
        />
        <img
          src="/images/slideBottom.svg"
          className="absolute bottom-[-1px] h-[97px] z-10 w-full"
        />
        <div
          className="absolute hover:cursor-pointer select-none flex top-32 justify-center items-center z-30 w-[120px] h-[120px] border-[1px] border-solid border-[#fff] rounded-full"
          onClick={leftButtonClick}
        >
          <img src="/images/cursor.svg" className="scale-[-1]" />
        </div>
        <div
          onClick={rightButtonClick}
          className="absolute right-0 top-32 select-none hover:cursor-pointer flex justify-center items-center z-30 w-[120px] h-[120px] border-[1px] border-solid border-[#fff] rounded-full"
        >
          <img src="/images/cursor.svg" />
        </div>

        <div
          className={`flex`}
          style={{
            transform: `translateX(${calcSlidePx})`,
          }}
        >
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-blue.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="1 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-red.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="2 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-orange.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="3 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-green.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="4 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-blue.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="1 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-red.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="2 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-orange.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="3 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-green.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="4 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-blue.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="1 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-red.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="2 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-orange.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="3 of 4"
            />
          </div>
          <div className="w-[650px]">
            <img
              src="/images/gradient-bg-green.png"
              className="scale-x-[1.15] w-[650px] h-[950px] max-w-none slide-mask-image"
              aria-label="4 of 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEggProductSlide;
