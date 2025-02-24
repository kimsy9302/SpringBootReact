import React from "react";

const HyuckBin = ({ fu, vv }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("결과", fu(34) + vv(23, { a: [1, 2, 3, 4] }));
        }}
      >
        눌러라
      </button>
    </div>
  );
};

export default HyuckBin;
