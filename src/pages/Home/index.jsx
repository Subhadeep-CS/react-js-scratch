import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [a, setA] = useState(2);

  const handleClick = () => {
    //stale state problem
    // Non functional update
    // setA(a + 2);
    // setA(a - 1);
    // setA(a + 1);
    // setA(a / 1);
    // setA(a + 1);
    // setA(a * 2);
    // functional update
    setA((prevA) => prevA + 1);
    setA((prevA) => prevA + 1);
    setA(a + 1);
    setA(a + 1);
    setA(a + 1);
  };

  useEffect(() => {
    if (a != 2) {
      console.log(a);
    }
  }, [a]);

  return <div onClick={() => handleClick()}>Home {a}</div>;
};

export default Home;
