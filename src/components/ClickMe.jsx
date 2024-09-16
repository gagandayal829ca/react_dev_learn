import React from "react";
import { useState } from "react";

const ClickMe = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button> {count}
    </>
  );
};

export default ClickMe;
