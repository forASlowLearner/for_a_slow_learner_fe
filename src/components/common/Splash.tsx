import React, { useState } from "react";
import walkingTurtleLeft from "../../assets/images/walkingTurtleLeft.png";
import walkingTurtleRight from "../../assets/images/walkingTurtleRight.png";
import mainLogo from "../../assets/images/mainLogo.png";
interface SplashProps {
  children?: React.ReactNode;
}

const Splash = ({ children }: SplashProps) => {
  const [isLeft, setIsLeft] = useState(true);

  setTimeout(() => {
    if (isLeft) {
      setIsLeft(false);
    } else {
      setIsLeft(true);
    }
  }, 350);
  return (
    <>
      <div className="loadingImage leading-[400px]">
        {isLeft ? (
          <img src={walkingTurtleLeft} alt="loading" className="w-[300px]" />
        ) : (
          <img src={walkingTurtleRight} alt="loading" className="w-[300px]" />
        )}
      </div>
      <img src={mainLogo} alt="mainLogo" className="w-[120px] m-auto" />
      {children}
    </>
  );
};

export default Splash;
