"use client";

import { useState } from "react";

const CustomCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button className="border border-white p-2" onClick={handleClick}>
        클릭
      </button>
      (client컴포넌트로 분리~)
    </div>
  );
};

export default CustomCounter;
