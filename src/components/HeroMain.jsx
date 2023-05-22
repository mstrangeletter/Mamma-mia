import { useState, useEffect } from "react";

const HeroMain = ({ backgroundImg, children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${offset * 0.5}px)`
      }}
    >
      {children}
    </section>
  );
};

export default HeroMain;
