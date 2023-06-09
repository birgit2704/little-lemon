import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ButtonBackToTop = () => {
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {showButton && (
        <a className="backToTop" href="#header">
          <BsFillArrowUpCircleFill /> Back to top
        </a>
      )}
    </>
  );
};

export default ButtonBackToTop;
